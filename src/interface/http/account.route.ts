import type { FastifyInstance } from "fastify";
import { AccountController } from "./account.controller";
import { Type } from "@fastify/type-provider-typebox";

const controller = new AccountController();

export async function accountAuthenticationRoute(app: FastifyInstance) {
  app.post('/token', {
    schema: {
      body: Type.Object({
        username: Type.String(),
        password: Type.String(),
      })
    }
  }, (req, rep) => controller.authenticate(req, rep));
}