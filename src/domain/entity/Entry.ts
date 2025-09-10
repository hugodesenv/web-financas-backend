import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./Person";
import { type } from "os";
import { Purpose } from "./Purpose";
import { BankAccount } from "./BankAccount";

@Entity('entry')
export class Entry {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ enum: ['payable', 'receivable'] })
  type: string;

  @ManyToOne(type => Person)
  @JoinColumn({ name: 'fk_person' })
  person: Person;

  @ManyToOne(type => Purpose)
  @JoinColumn({ name: 'fk_purpose' })
  purpose: Purpose;

  @Column({ nullable: false })
  issue_date: Date;

  @Column({ type: 'text' })
  observation: string;

  @Column()
  mode: string;

  @Column({ type: 'double precision', default: 0.0 })
  total: number;

  @ManyToOne(type => BankAccount)
  @JoinColumn({ name: 'fk_bank_account' })
  bankAccount: BankAccount;
}