import { FastifyRequest } from "fastify";

export const diScope = (context: any) => {
  const request = context.reply.request as FastifyRequest;
  return request.diScope;
}