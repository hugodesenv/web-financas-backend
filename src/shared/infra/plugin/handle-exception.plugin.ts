import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { FRIENDLY_MESSAGE, HTTPStatus } from "../../utils/constants.utils";

export function handleExceptionPlugin(error: FastifyError, req: FastifyRequest, rep: FastifyReply) {
  const { code, message, statusCode } = error;
  const lowerMessage = message?.toLowerCase() || "";

  const key = Object.keys(FRIENDLY_MESSAGE)
    .find((col) => lowerMessage.includes(col.toLowerCase()));

  return rep.status(HTTPStatus.BAD_REQUEST).send({
    success: false,
    message: key ? FRIENDLY_MESSAGE[key] : message,
    code
  });
}