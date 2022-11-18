FROM node:16.0.0-slim as base
WORKDIR /app
# dev image contains everything needed for testing, development and building
FROM base AS development
COPY ./package*.json ./yarn*.lock ./

# first set aside prod dependencies so we can copy in to the prod image
RUN yarn install --pure-lockfile --production
RUN cp -R node_modules /tmp/node_modules

# install all dependencies and add source code
RUN yarn install --pure-lockfile
COPY . .

# builder runs unit tests and linter, then builds production code 
FROM development as builder
RUN yarn build
# release includes bare minimum required to run the app, copied from builder
FROM base AS release
RUN yarn add pm2
COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/processes.json ./
COPY --from=builder /app/server.js ./server.js

EXPOSE 3000
CMD ["yarn", "pm2"]