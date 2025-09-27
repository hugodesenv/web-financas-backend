import { FastifyReply, FastifyRequest } from "fastify";
import { TBankAccountCreateSchema, TBankAccountUpdateSchema } from "../../domain/schemas/bank-account.schemas";
import { HTTPStatus } from "../../shared/utils/constants.utils";

export class BankAccountController {

  async create(req: FastifyRequest<{ Body: TBankAccountCreateSchema }>, rep: FastifyReply) {
    const use = req.diScope.cradle.createBankAccountUseCase;
    const success = await use.execute(req.body);

    if (!success) {
      return rep.status(HTTPStatus.BAD_REQUEST).send();
    }

    return rep.status(HTTPStatus.ACCEPTED).send();
  }

  async update(req: FastifyRequest<{ Body: TBankAccountUpdateSchema }>, rep: FastifyReply) {
    const use = req.diScope.cradle.updateBankAccountUseCase;
    const success = await use.execute(req.body);

    if (!success) {
      return rep.status(HTTPStatus.BAD_REQUEST).send();
    }

    return rep.status(HTTPStatus.ACCEPTED).send();
  }

  async delete(req: FastifyRequest<{ Querystring: { code: string } }>, rep: FastifyReply) {
    const use = req.diScope.cradle.deleteBankAccountUseCase;
    const success = await use.execute(req.query.code);

    if (!success) {
      return rep.status(HTTPStatus.BAD_REQUEST).send();
    }

    return rep.status(HTTPStatus.ACCEPTED).send();
  }
}