import type { FastifyReply, FastifyRequest } from "fastify";
import { HTTPStatus } from "../../shared/utils/constants.utils";

export class AccountController {
  async authenticate(req: FastifyRequest, rep: FastifyReply) {
    const service = req.diScope.cradle.accountService;

    const success = await service.login(
      req.body['username'],
      req.body['password']
    );

    if (!success) {
      return rep.status(HTTPStatus.UNAUTHORIZED).send();
    }

    return rep.status(HTTPStatus.ACCEPTED).send();
  }
}