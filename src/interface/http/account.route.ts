import { Type } from "@fastify/type-provider-typebox";
import type { FastifyInstance } from "fastify";
import { AccountController } from "./account.controller";

const controller = new AccountController();

export async function accountAuthenticationRoute(app: FastifyInstance) {
  app.post('/token', {
    schema: {
      tags: ['User'],
      description: 'Get API key',
      body: Type.Object({
        username: Type.String(),
        password: Type.String(),
      }),
      response: {
        202: Type.Object({ token: Type.String() }),
        404: Type.Null(),
      }
    }
  }, (req, rep) => controller.authenticate(req, rep));
}