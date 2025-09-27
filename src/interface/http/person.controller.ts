import { FastifyReply, FastifyRequest } from "fastify";
import { TAPIResponseSchema } from "../../domain/schemas/api.schemas";
import { TPersonCreateSchema } from "../../domain/schemas/person.schemas";

export class PersonController {

  async create(req: FastifyRequest<{ Body: TPersonCreateSchema }>, rep: FastifyReply) {
    const service = req.diScope.cradle.personService;
    const success = await service.create(req.body);

    if (!success) {
      return rep.status(401).send(<TAPIResponseSchema>{ success: false, message: 'Fail to create person' });
    }

    return rep.status(200).send(<TAPIResponseSchema>{ success: true, message: 'Success!' });
  }
}