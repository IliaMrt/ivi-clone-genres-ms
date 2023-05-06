import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Genre } from './entity/genre.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { CreateGenreMessageDto } from './dto/create-genre-message.dto';

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

  @MessagePattern({ cmd: 'getGenre' })
  async getGenre(genreId: number): Promise<Genre> {
    console.log('Genres MS - Controller - getGenre at', new Date());
    return this.appService.getGenre(genreId);
  }

  @MessagePattern({ cmd: 'deleteGenre' })
  async deleteGenre(genreId: number): Promise<DeleteResult> {
    console.log('Genres MS - Controller - deleteGenre at', new Date());
    return this.appService.deleteGenre(genreId);
  }

  @MessagePattern({ cmd: 'updateGenre' })
  async updateGenre(updateGenreDto: UpdateGenreDto): Promise<UpdateResult> {
    console.log('Genres MS - Controller - updateGenre at', new Date());
    return this.appService.updateGenre(updateGenreDto);
  }
}
