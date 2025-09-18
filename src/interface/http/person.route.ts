import { FastifyInstance } from "fastify";
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
}