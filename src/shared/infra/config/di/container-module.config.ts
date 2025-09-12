import { AccountService } from "../../../../domain/services/account.service";
import { AppDataSource } from "../app-data-source.config";

declare module '@fastify/awilix' {
  interface Cradle {
    appDataSource: AppDataSource,
    accountService: AccountService,
  }
  interface RequestCradle { }
}