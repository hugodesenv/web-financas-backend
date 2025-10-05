import { fastifyAwilixPlugin } from "@fastify/awilix";
import fastifyJwt from "@fastify/jwt";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import 'dotenv/config';
import fastify from "fastify";
import mercurius from "mercurius";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { BankAccountResolver } from "./domain/graphs/bank-account/resolver";
import { customAuthChecker } from "./domain/graphs/custom-auth-checker";
import { accountAuthenticationRoute } from "./interface/http/account.route";
import { bankAccountRoute } from "./interface/http/bank-account.route";
import { personRoute } from "./interface/http/person.route";
import { getContainer } from "./shared/infra/config/container.config";
import { authenticateMiddleware } from "./shared/infra/middlewares/authenticate.middleware";
import { setupEnvironment } from "./shared/infra/middlewares/setup-environment.middleware";
import { handleExceptionPlugin } from "./shared/infra/plugin/handle-exception.plugin";

export async function buildServer(opts = {}) {
  const server = fastify(opts);
  const container = getContainer();

  const schema = await buildSchema({
    resolvers: [BankAccountResolver],
    authChecker: customAuthChecker
  });

  server.register(fastifyAwilixPlugin, { container, disposeOnClose: true, disposeOnResponse: true });
  server.register(fastifyJwt, { secret: process.env.SECRET_JWT }); // afins de teste, nao inclui tempo de validade (ainda).
  server.register(fastifySwagger);
  server.register(fastifySwaggerUi, { routePrefix: '/documentation' });

  server.setErrorHandler(handleExceptionPlugin);
  server.get('/', (_, rep) => rep.status(200).send("Hello World"));

  server.register((app) => {
    app.addHook('onRequest', setupEnvironment);

    server.register(mercurius, {
      schema,
      resolvers: {},
      graphiql: true,
      context: (req, _rep) => ({ di: req.diScope.cradle, jwtVerify: req.jwtVerify }),
    });

    app.register(accountAuthenticationRoute);

    app.register(function (app) {
      app.addHook('onRequest', authenticateMiddleware);
      app.register(bankAccountRoute, { prefix: '/bank-account' });
      app.register(personRoute, { prefix: '/person' });
    });
  }, { prefix: '/api' });

  return server;
}