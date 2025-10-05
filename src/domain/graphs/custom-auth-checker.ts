import { AuthChecker } from "type-graphql";

export const customAuthChecker: AuthChecker = async ({ root, args, context, info }, roles) => {
  try {
    await context['jwtVerify']();
    return true;
  } catch (e) {
    return false;
  }
};