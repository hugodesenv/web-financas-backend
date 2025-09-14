import { FastifyInstance, FastifyRequest } from "fastify";
import { BankAccountController } from "./bank-account.controller";
import { BankAccountCreateSchema, TBankAccountCreateSchema } from "../../domain/schemas/bank-account-create.schemas";

const controller = new BankAccountController();

const tags = ['Bank account'];

export async function bankAccountRoute(app: FastifyInstance) {
  app.get('/find-all', {
    schema: {
      tags,
      description: 'Bank account list',
    }
  }, (req, rep) => controller.findAll(req, rep));

  app.post('/', {
    schema: {
      tags,
      description: 'To create a bank account',
      body: BankAccountCreateSchema,
    }
  }, (req: FastifyRequest<{ Body: TBankAccountCreateSchema }>, rep) => controller.create(req, rep));
}