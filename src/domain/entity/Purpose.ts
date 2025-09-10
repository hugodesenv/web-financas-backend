import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('purpose')
export class Purpose {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  description: string;
}