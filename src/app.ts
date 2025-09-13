import { fastifyAwilixPlugin } from "@fastify/awilix";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { accountAuthenticationRoute } from "./interface/http/account.route";
import { getContainer } from "./shared/infra/config/di/container.config";
import { authenticateMiddleware } from "./shared/infra/middlewares/authenticate.middleware";
import { setupEnvironment } from "./shared/infra/middlewares/setup-environment.middleware";
import 'dotenv/config';
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";
import { bankAccountRoute } from "./interface/http/bank-account.route";

export function buildServer(opts = {}) {
  const server = fastify(opts);
  const container = getContainer();

  server.register(fastifyAwilixPlugin, { container, disposeOnClose: true, disposeOnResponse: true });
  server.register(fastifyJwt, { secret: process.env.SECRET_JWT });

  server.register(fastifySwagger);
  server.register(fastifySwaggerUi, {
    routePrefix: '/documentation',
  });

  server.get('/', (_, rep) => rep.status(200).send("Hello World"));

  server.register((app) => {
    app.addHook('onRequest', setupEnvironment);
    app.register(accountAuthenticationRoute);
    app.register(function (app) {
      app.addHook('onRequest', authenticateMiddleware);
      app.register(bankAccountRoute, { prefix: '/bank-account' })
    });
  }, { prefix: '/api' });

  return server;
}