// @ts-check
const path = require('path')
const express = require('express');
const fs = require('fs');

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const app = express()

  let vite;
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          usePolling: true,
          interval: 100
        }
      }
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  } else {
    app.use(require('compression')())
    app.use(
      require('serve-static')(resolve('./dist/client'), {
        index: false
      })
    )
  }

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl
      const indexProd = isProd ? fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8') : '';

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).renderBefore
      } else {
        template = indexProd;
        render = require('./dist/server/entry-server.js').renderBefore;
      }

      const DUCT = { req, res }
      render(DUCT, template);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}


createServer().then(({ app }) =>
  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })
)
