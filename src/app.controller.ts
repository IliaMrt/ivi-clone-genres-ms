import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Genre } from './entity/genre.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateGenreMessageDto } from './dto/create-genre-message.dto';
import { GenreByIdMessageDto } from './dto/genre-by-id-message.dto';
import { UpdateGenreMessageDto } from './dto/update-genre-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'createGenre' })
  async createGenre(
    createGenreMessageDto: CreateGenreMessageDto,
  ): Promise<Genre> {
    console.log('Genres MS - Controller - createGenre at', new Date());
    return this.appService.createGenre(createGenreMessageDto);
  }

  @MessagePattern({ cmd: 'getAllGenres' })
  async getAllGenres(): Promise<Genre[]> {
    console.log('Genres MS - Controller - getAllGenres at', new Date());
    return this.appService.getAllGenres();
  }

  @MessagePattern({ cmd: 'getGenreById' })
  async getGenreById(
    getGenreByIdMessageDto: GenreByIdMessageDto,
  ): Promise<Genre> {
    console.log('Genres MS - Controller - getGenre at', new Date());
    return this.appService.getGenreById(getGenreByIdMessageDto);
  }

  @MessagePattern({ cmd: 'deleteGenre' })
  async deleteGenre(
    getGenreByIdMessageDto: GenreByIdMessageDto,
  ): Promise<DeleteResult> {
    console.log('Genres MS - Controller - deleteGenre at', new Date());
    return this.appService.deleteGenre(getGenreByIdMessageDto);
  }

  @MessagePattern({ cmd: 'updateGenre' })
  async updateGenre(
    updateGenreMessageDto: UpdateGenreMessageDto,
  ): Promise<UpdateResult> {
    console.log('Genres MS - Controller - updateGenre at', new Date());
    return this.appService.updateGenre(updateGenreMessageDto);
  }

  @MessagePattern({ cmd: 'getMovieGenres' })
  async getMovieGenres(getMovieGenresDto: { movieId: number }) {
    console.log('Genres MS - Controller - getMovieGenres at', new Date());
    return;
  }

  @MessagePattern({ cmd: 'loadMovieGenres' })
  async loadMovieGenres(loadMovieGenresDto: { movieId: number }) {
    console.log('Genres MS - Controller - getMovieGenres at', new Date());
    return;
  }
}
