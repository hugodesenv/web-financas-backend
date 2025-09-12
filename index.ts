import { fastifyAwilixPlugin } from "@fastify/awilix";
import fastifyJwt from "@fastify/jwt";
import 'dotenv/config';
import fastify from 'fastify';
import "reflect-metadata";
import { getContainer } from "./src/shared/infra/config/di/container.config.js";
import { authenticateMiddleware } from "./src/shared/infra/middlewares/authenticate.middleware.js";
import { setupEnvironment } from './src/shared/infra/middlewares/setup-environment.middleware.js';
import { accountAuthenticationRoute } from "./src/interface/http/account.route.js";

// ==> registro de plugins
const server = fastify();
const container = getContainer();
const config = {
  host: process.env.API_HOST,
  port: parseInt(process.env.API_PORT)
}

server.register(fastifyAwilixPlugin, { container, disposeOnClose: true, disposeOnResponse: true });
server.register(fastifyJwt, { secret: process.env.SECRET_JWT });

// ==> rotas  
server.register((app) => {
  app.addHook('onRequest', setupEnvironment);
  app.register(accountAuthenticationRoute);
  app.register(function (app) {
    app.addHook('onRequest', authenticateMiddleware);
  });
}, { prefix: '/api' });

// ==> iniciando o servidor
server.listen(config, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`👉 Server listening at ${address}`)
});