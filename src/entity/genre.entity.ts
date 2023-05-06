import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  nameRu: string;

  @Column({ nullable: false, unique: true })
  nameEn: string;

  // @Column({ nullable: true })
  // movies: string;
}
