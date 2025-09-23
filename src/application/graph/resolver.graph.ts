import { FastifyRequest } from "fastify";

const _diScope = (context: any) => {
  const request = context.reply.request as FastifyRequest;
  return request.diScope;
}

export const resolvers = {
  Query: {
    hello: () => 'Olá, GraphiQL está no ar!',

    bankAccount: async (_, { code }, context) => {
      const service = _diScope(context).cradle.bankAccountService;
      return await service.findByCode(code);
    },

    banksAccounts: async (_, args, context) => {
      const service = _diScope(context).cradle.bankAccountService;
      return await service.findAll();
    },
  },
};