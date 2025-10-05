import { AuthChecker } from "type-graphql";

export const customAuthChecker: AuthChecker = ({ root, args, context, info }, roles) => {
  // Read user from context
  // and check the user's permission against the `roles` argument
  // that comes from the '@Authorized' decorator, eg. ["ADMIN", "MODERATOR"]

  return false; // or 'false' if access is denied
};

Anotaçao Hugo:
Implementar esquema de validaçao.