import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameRu: string;

  @Column()
  nameEn: string;

  @Column({ nullable: true })
  movies: string;
}
