import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { APIResponseSchema, TAPIResponseSchema } from "../../domain/schemas/api.schemas";
import { PersonCreateSchema } from "../../domain/schemas/person.schemas";
import { TPersonCreateSchema } from './../../domain/schemas/person.schemas';
import { PersonController } from "./person.controller";

const controller = new PersonController();
const tags = ['Person'];

export async function personRoute(app: FastifyInstance) {
  app.get('/', {
    schema: {
      tags,
      description: 'Get person list'
    }
  }, (req, rep) => controller.findAll(req, rep));

  app.post('/', {
    schema: {
      tags,
      description: 'Person create',
      body: PersonCreateSchema,
    }
  }, (req: FastifyRequest<{ Body: TPersonCreateSchema }>, rep: FastifyReply) => controller.create(req, rep));
}