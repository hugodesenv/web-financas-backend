import { FastifyReply, FastifyRequest } from "fastify";
import { TBankAccountCreateSchema } from "../../domain/schemas/bank-account-create.schemas";
import { HTTPStatus } from "../../shared/utils/constants.utils";

export class BankAccountController {
  async findAll(req: FastifyRequest, rep: FastifyReply) {
    const service = req.diScope.cradle.bankAccountService;
    const data = await service.findAll();
    return rep.status(200).send({ data });
  }

  async create(req: FastifyRequest<{ Body: TBankAccountCreateSchema }>, rep: FastifyReply) {
    const use = req.diScope.cradle.createBankAccountUseCase;
    const success = await use.execute(req.body);

    if (!success) {
      return rep.status(HTTPStatus.BAD_REQUEST).send();
    }

    return rep.status(HTTPStatus.ACCEPTED).send();
  }
}