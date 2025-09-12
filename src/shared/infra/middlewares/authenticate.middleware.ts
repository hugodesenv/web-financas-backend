import { FastifyReply, FastifyRequest } from 'fastify';

// Verifico se o Token passado é válido.
export async function authenticateMiddleware(req: FastifyRequest, rep: FastifyReply) {
  try {
    await req.jwtVerify();
    return;
  } catch (err) {
    return rep.status(404).send("Falha de autenticação");
  }
}