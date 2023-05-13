import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from './genre.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  movieId: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  genres: Genre[];
}
