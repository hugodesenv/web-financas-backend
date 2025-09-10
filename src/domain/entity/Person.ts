import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 80, nullable: false })
  name: string;

  @Column({ length: 80 })
  nickname: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  is_client: boolean;

  @Column({ default: false })
  is_company: boolean;

  @Column({ default: false })
  is_employee: boolean;
}