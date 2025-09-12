import { Lifetime, asFunction } from "awilix";
import { FastifyReply, FastifyRequest } from "fastify";
import { DataSourceOptions } from "typeorm";
import { Account } from "../../../domain/entity/Account";
import { AppDataSource } from "../config/app-data-source.config";

/**
 * Neste middleware eu inicializo a configuração de banco de dados do meu projeto.
 * Aproveito que estou usando injeção de dependências e preparo a instância de banco de dados chamada
 * dataSource.
 */
export async function setupEnvironment(req: FastifyRequest, _: FastifyReply) {
  const db_config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_web",
    synchronize: false,
    logging: false,
    entities: [Account],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
    migrationsTableName: "script"
  } as DataSourceOptions;

  req.diScope.register({
    appDataSource: asFunction(() => {
      return new AppDataSource(db_config);
    },
      {
        lifetime: Lifetime.SCOPED,
        dispose: (module) => module.dispose(),
      })
  });

  return;
}