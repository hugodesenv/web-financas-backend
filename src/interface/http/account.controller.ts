import type { FastifyReply, FastifyRequest } from "fastify";
import { HTTPStatus } from "../../shared/utils/constants.utils";

export class AccountController {
  async authenticate(req: FastifyRequest, rep: FastifyReply) {
    const use = req.diScope.cradle.accountService;

    const success = await use.login(
      req.body['username'],
      req.body['password']
    );

    if (!success) {
      return rep.status(HTTPStatus.UNAUTHORIZED).send();
    }

    const token = await rep.jwtSign({
      username: req.body['username']
    });

    return rep.status(HTTPStatus.ACCEPTED).send({ token });
  }
}