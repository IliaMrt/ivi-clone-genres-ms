import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  async createGenre(createGenreDto: CreateGenreDto) {
    // const newGenre = await this.genreRepository.create(createGenreDto);
    return this.genreRepository.save(createGenreDto);
  }
}
