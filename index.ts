import 'dotenv/config';
import { buildServer } from './src/app';

const config = {
  host: process.env.API_HOST,
  port: parseInt(process.env.API_PORT)
}

const server = buildServer({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty'
    }
  }
});

server.listen(config, (err: any, address: any) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
});