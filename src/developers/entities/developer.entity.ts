import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nanoid } = require('nanoid');

@Entity('developers') // Create the table named `developers`
export class Developer {
  @PrimaryColumn()
  id: string; // dev_09d8as0d98as

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  generateNanoId() {
    this.id = `dev_${nanoid()}`;
  }
}
