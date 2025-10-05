import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType({ description: "The bank account model" })
@Entity('bank_account')
export class BankAccount {
  @Field(() => String)
  @PrimaryColumn({ length: 7, type: 'varchar' })
  code: string;

  @Field(() => String)
  @Column({ length: 50, type: 'varchar' })
  description: string;
}