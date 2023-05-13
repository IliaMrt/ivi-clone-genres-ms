import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';
import { CreateGenreMessageDto } from './dto/create-genre-message.dto';
import { GenreByIdMessageDto } from './dto/genre-by-id-message.dto';
import { UpdateGenreMessageDto } from './dto/update-genre-message.dto';
import { AddGenresToMovieDto } from './dto/add-genres-to-movie.dto';
import { Movie } from './entity/movie.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async createGenre(
    createGenreMessageDto: CreateGenreMessageDto,
  ): Promise<Genre> {
    console.log('Genres MS - Service - createGenre at', new Date());
    return this.genreRepository.save(createGenreMessageDto.createGenreDto);
  }

  async getAllGenres(): Promise<Genre[]> {
    console.log('Genres MS - Service - getAllGenres at', new Date());
    return this.genreRepository.find();
  }

  async getGenreById(
    getGenreByIdMessageDto: GenreByIdMessageDto,
  ): Promise<Genre> {
    console.log('Genres MS - Service - getGenre at', new Date());
    return this.genreRepository.findOneBy({
      id: getGenreByIdMessageDto.genreId,
    });
  }

  async deleteGenre(
    getGenreByIdMessageDto: GenreByIdMessageDto,
  ): Promise<DeleteResult> {
    console.log('Genres MS - Service - deleteGenre at', new Date());
    return this.genreRepository.delete(getGenreByIdMessageDto.genreId);
  }

  async updateGenre(
    updateGenreMessageDto: UpdateGenreMessageDto,
  ): Promise<UpdateResult> {
    console.log('Genres MS - Service - updateGenre at', new Date());
    return this.genreRepository.update(updateGenreMessageDto.genreId, {
      nameRu: updateGenreMessageDto.updateGenreDto.nameRu,
      nameEn: updateGenreMessageDto.updateGenreDto.nameEn,
    });
  }

  async addGenresToMovie(addGenresToMovieDto: AddGenresToMovieDto) {
    console.log('Genres MS - Service - addGenresToMovie at', new Date());

    //Create movie if not exists
    if (
      !(await this.movieRepository.findOneBy({
        movieId: addGenresToMovieDto.movieId,
      }))
    ) {
      console.log(addGenresToMovieDto);
      await this.movieRepository.save({ movieId: addGenresToMovieDto.movieId });
    }

    //Get movie
    const movie = await this.movieRepository.findOneBy({
      movieId: addGenresToMovieDto.movieId,
    });

    //Adding genres to movie
    movie.genres = [];
    for (const genreId of addGenresToMovieDto.genres) {
      const genre = await this.genreRepository.findOneBy({
        id: genreId,
      });
      movie.genres.push(genre);
    }

    return await this.movieRepository.save(movie);
  }
}
