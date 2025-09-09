import fastify from 'fastify'
import { API_CONFIG } from './src/shared/infra/constants.js'
import "reflect-metadata";
import { userRoutes } from './dist/src/modules/user/interface/http/user.routes.js';

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register(userRoutes, { prefix: '/api' });

server.listen({ port: API_CONFIG.port, host: API_CONFIG.host }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`👉 Server listening at ${address}`)
})