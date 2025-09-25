import { FastifyReply, FastifyRequest } from "fastify";
import { TPersonCreateSchema } from "../../domain/schemas/person.schemas";
import { HTTPStatus } from "../../shared/utils/constants.utils";
import { TAPIResponseSchema } from "../../domain/schemas/api.schemas";

export class PersonController {

  async findAll(req: FastifyRequest, rep: FastifyReply) {
    const service = req.diScope.cradle.personService;
    const data = await service.findAll();

    return rep.status(HTTPStatus.ACCEPTED).send({ data });
  }

  async create(req: FastifyRequest<{ Body: TPersonCreateSchema }>, rep: FastifyReply) {
    const service = req.diScope.cradle.personService;
    const success = await service.create(req.body);

    if (!success) {
      return rep.status(401).send(<TAPIResponseSchema>{ success: false, message: 'Fail to create person' });
    }

    return rep.status(200).send(<TAPIResponseSchema>{ success: true, message: 'Success!' });
  }
}