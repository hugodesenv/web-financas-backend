import type { FastifyInstance } from "fastify";
import { UserController } from "./user.controller.js";

export async function userRoutes(app: FastifyInstance) {
  const controller = new UserController();
  
  app.post('/auth', (req, rep) => controller.authenticate(req, rep));
}