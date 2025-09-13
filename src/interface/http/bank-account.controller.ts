import { FastifyReply, FastifyRequest } from "fastify";

export class BankAccountController {
  async findAll(req: FastifyRequest, rep: FastifyReply) {
    const service = req.diScope.cradle.bankAccountService;
    const data = await service.findAll();

    return rep.status(200).send({ data });
  }
}