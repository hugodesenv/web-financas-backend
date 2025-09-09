import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  description: string;
}