export const bankAccountSchema = `
  banksAccounts: [BankAccount]!
  bankAccount(code: String): BankAccount
`;

export const bankAccountTypeSchema = `
  type BankAccount {
    code: String!
    description: String
  }
`