import type { FastifyReply, FastifyRequest } from "fastify";

export class UserController {
  async authenticate(req: FastifyRequest, rep: FastifyReply) {
    //==> minha logica aqui
    return rep.code(200).send("Fazer a autenticacao aqui");
  }
}

amanha...
instalar o awilix
subir o projeto em nuvem
chamar as instancias aqui dentro