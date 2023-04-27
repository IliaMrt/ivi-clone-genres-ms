import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Genre } from './entity/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'createGenre' })
  async createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.appService.createGenre(createGenreDto);
  }
}
