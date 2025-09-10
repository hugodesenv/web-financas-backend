import "reflect-metadata"
import fastify from 'fastify';
import { userRoutes } from './src/interface/http/user.routes.js';
import { API_CONFIG } from './src/shared/infra/constants.js';
import { setupEnvironment } from './src/shared/infra/middlewares/setup.environment.mid.js';
import { fastifyAwilixPlugin } from "@fastify/awilix";
import { getContainer } from "./src/shared/infra/config/container.config.js";

const server = fastify()

// ==> registro de plugins
const container = getContainer();
server.register(fastifyAwilixPlugin, { container, disposeOnClose: true, disposeOnResponse: true });

// ==> registro de middlewares
server.addHook('onRequest', (req, rep, done) => {
  setupEnvironment(req, rep, () => done());
});

// ==> rotas
server.register(userRoutes, { prefix: '/api' });
server.get('/', (_, rep) => {
  return rep.status(200).send("Hello World");
})

// ==> iniciando o servidor
server.listen({ port: API_CONFIG.port, host: API_CONFIG.host }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`👉 Server listening at ${address}`)
})