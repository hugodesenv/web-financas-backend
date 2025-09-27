import { diScope } from "../../../shared/utils/utils";

export const personResolver = {
  persons: async (_, args, context) => {
    const service = diScope(context).cradle.personService;
    return await service.findAll();
  }
}