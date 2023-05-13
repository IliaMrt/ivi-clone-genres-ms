import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  nameRu: string;

  @Column({ nullable: false, unique: true })
  nameEn: string;

  @ManyToMany(() => Movie, (movie) => movie.genres)
  movies: Movie[];
}
