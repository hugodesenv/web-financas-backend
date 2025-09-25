import { Type } from "@fastify/type-provider-typebox";

export const APIResponseSchema = Type.Object({
  success: Type.Boolean({ default: false }),
  message: Type.Optional(Type.String()),
  data: Type.Optional(Type.Any())
});

export type TAPIResponseSchema = typeof APIResponseSchema.static;