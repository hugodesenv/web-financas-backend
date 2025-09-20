export const schema = `
  type Query {
    hello: String
    banksAccounts: [BankAccount]!
  },

  type BankAccount {
    code: String!
  }
`;