import { Type } from "@fastify/type-provider-typebox";

const PersonSchema = Type.Object({
  name: Type.String(),
  nickname: Type.Optional(Type.String()),
  active: Type.Boolean().default(true),
  is_client: Type.Boolean().default(false),
  is_company: Type.Boolean().default(false),
  is_employee: Type.Boolean().default(false),
});

export const PersonCreateSchema = PersonSchema;
export const PersonListSchemaDTO = PersonSchema;

export type TPersonCreateSchema = typeof PersonCreateSchema.static;
export type TPersonListSchemaDTO = typeof PersonListSchemaDTO.static;