import { bankAccountResolver } from "./resolver/bankAccountResolver";
import { personResolver } from './resolver/personResolver';

export const resolvers = {
  Query: {
    hello: () => 'Olá, GraphiQL está no ar!',
    bankAccountResolver,
    personResolver,
  },
};