import { FastifyReply, FastifyRequest } from "fastify";
import { HTTPStatus } from "../../shared/utils/constants.utils";

export class PersonController {
  async findAll(req: FastifyRequest, rep: FastifyReply) {
    const service = req.diScope.cradle.personService;
    const data = await service.findAll();
    return rep.status(HTTPStatus.ACCEPTED).send({ data });
  }
}