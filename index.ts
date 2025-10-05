import 'dotenv/config';
import { buildServer } from './src/app';

const config = {
  host: process.env.API_HOST,
  port: parseInt(process.env.API_PORT)
}

const server = await buildServer({});

server.listen(config, (err: any, address: any) => {
  console.log('Iniciando o servidor... Na porta: ', config.port);

  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  console.log(`🚀 Server started > Port ${config.port}`)
});