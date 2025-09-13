import { FastifyInstance } from "fastify";
import { BankAccountController } from "./bank-account.controller";

const controller = new BankAccountController();

export async function bankAccountRoute(app: FastifyInstance) {
  app.get('/find-all', {
    schema: {
      tags: ['Bank account'],
      description: 'Bank account list',
    }
  }, (req, rep) => controller.findAll(req, rep));
}