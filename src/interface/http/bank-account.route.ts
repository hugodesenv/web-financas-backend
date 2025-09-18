import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BankAccountCreateSchema, BankAccountUpdateSchema, TBankAccountCreateSchema, TBankAccountUpdateSchema } from "../../domain/schemas/bank-account.schemas";
import { BankAccountController } from "./bank-account.controller";

const controller = new BankAccountController();
const tags = ['Bank account'];

export async function bankAccountRoute(app: FastifyInstance) {
  app.get('/', {
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

  app.put('/', {
    schema: {
      tags,
      description: 'To update bank account',
      body: BankAccountUpdateSchema
    }
  }, (req: FastifyRequest<{ Body: TBankAccountUpdateSchema }>, rep) => controller.update(req, rep));

  app.delete('/:code', {
    schema: {
      tags,
      description: 'To delete bank account',
    }
  }, (req: FastifyRequest<{ Querystring: { code: string } }>, rep: FastifyReply) => controller.delete(req, rep));
}