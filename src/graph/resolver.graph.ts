const bankAccountTest = [
  {
    code: '001',
    description: 'Banco América',
  },
  {
    code: '002',
    description: 'Santander'
  },
];

export const resolvers = {
  Query: {
    hello: () => 'Olá, GraphiQL está no ar!',
    banksAccounts: () => bankAccountTest,
  },
};