import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Genre } from './genre.entity';

@Entity()
export class Movie {
  @PrimaryColumn({ nullable: false, unique: true })
  movieId: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  genres: Genre[];
}
