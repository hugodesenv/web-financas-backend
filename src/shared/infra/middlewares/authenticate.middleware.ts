import { FastifyReply, FastifyRequest } from 'fastify';

// Verifico se o Token passado é válido.
export async function authenticateMiddleware(req: FastifyRequest, rep: FastifyReply) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  try {
    await req.jwtVerify();
    return;
  } catch (err) {
    return rep.status(401).send("Falha de autenticação");
  }
}