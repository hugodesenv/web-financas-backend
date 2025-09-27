import { diScope } from "../../../shared/utils/utils";

export const bankAccountResolver = {
  bankAccount: async (_, { code }, context) => {
    const service = diScope(context).cradle.bankAccountService;
    return await service.findByCode(code);
  },

  banksAccounts: async (_, __, context) => {
    const service = diScope(context).cradle.bankAccountService;
    return await service.findAll();
  },
}