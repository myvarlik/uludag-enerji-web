import './setup/axiosConfig';

import { createStore, defaultState } from "./setup/store";

import { App } from './App';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'trim-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { errorLogger } from "./setup/utility/errorLogger";
import { fetchProvider } from '../render/fetchProvider';
import { initialize } from '../render/initialize';
import serialize from "serialize-javascript";

export function renderBefore(DUCT, template) {
  try {
    const response = (error) => render(error, DUCT, template);

    initialize(DUCT);

    fetchProvider(DUCT)
      .then(() => response()) // get data successfully
      .catch((err) => response(err)); // return error if any occured in fetchProvider() or render()
  } catch (err) {
    console.log(err);
    response(err)
  }
}

export async function render(error, DUCT, template) {
  let view;
  const routerContext = {};
  const helmetContext = {};
  if (!error) {
    const updatedState = DUCT.updatedState
    const dataExist = Object.getOwnPropertyNames(updatedState).length;
    const states = dataExist ? { ...defaultState, ...updatedState } : undefined;
    const store = createStore(states);

    view = (
      <Provider store={store}>
        <StaticRouter location={DUCT.req.originalUrl} context={routerContext}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>)
  } else {
    // when error occured during fetch and process
    errorLogger('SERVER >', error, false, DUCT.req);
    view = (
      <HelmetProvider context={helmetContext}>
        <Error error={error} />
      </HelmetProvider>
    )
  }

  const renderedView = ReactDOMServer.renderToString(view);

  if (!routerContext.url) {
    const status = !error ? (DUCT.status || 500) : 500;
    let dataTransfer;

    if (!error) {
      const updatedState = DUCT.updatedState
      const dataExist = Object.getOwnPropertyNames(updatedState).length;
      if (dataExist)
        dataTransfer = 'UPDATED_REDUX_STATES =' + serialize(updatedState);
    } else {
      dataTransfer = 'RSSR_PROCCESS_ERROR = true';
    }

    const renderedDataTransfer = ReactDOMServer.renderToString(<script dangerouslySetInnerHTML={{ __html: dataTransfer }} />);

    let html = template.replace(`<!--app-html-->`, renderedView);
    html = html.replace(`<!--app-head-->`, (helmetContext.helmet.title + helmetContext.helmet.meta + helmetContext.helmet.link));
    html = html.replace(`<!--UPDATED_REDUX_STATES-->`, renderedDataTransfer);

    DUCT.res.status(200).status(status).send(html);
  } else {
    // when <Redirect> rendered
    DUCT.res.redirect(301, routerContext.url);
  }
}