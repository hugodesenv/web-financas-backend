import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Account {
  @PrimaryColumn()
  @Column({ length: 40 })
  username: string;

  @Column({ type: "text" })
  password: string;

  @Column()
  active: boolean;
}