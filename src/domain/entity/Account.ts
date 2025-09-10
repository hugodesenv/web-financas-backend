import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('account')
export class Account {

  @PrimaryColumn({ length: 40, nullable: false, type: 'string' })
  username: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: 'boolean' })
  active: boolean;
}