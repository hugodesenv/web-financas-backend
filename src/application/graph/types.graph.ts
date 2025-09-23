export const schema = `
  type Query {
    hello: String

    banksAccounts: [BankAccount]!
    bankAccount(code: String): BankAccount
  },

  type BankAccount {
    code: String!
    description: String
  }
`;