import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('bank_account')
export class BankAccount {
  @PrimaryColumn({ length: 7, type: 'varchar' })
  code: string;

  @Column({ length: 50, type: 'varchar' })
  description: string;
}