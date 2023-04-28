import { CreateGenreDto } from './create-genre.dto';

export class UpdateGenreDto {
  readonly genreId: number;
  readonly genreData: CreateGenreDto;
}
