import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  async createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    console.log('Genres MS - Service - createGenre at', new Date());
    return this.genreRepository.save(createGenreDto);
  }

  async getAllGenres(): Promise<Genre[]> {
    console.log('Genres MS - Service - getAllGenres at', new Date());
    return this.genreRepository.find();
  }

  async getGenre(genreId: number): Promise<Genre> {
    console.log('Genres MS - Service - getGenre at', new Date());
    return this.genreRepository.findOneBy({ id: genreId });
  }

  async deleteGenre(genreId: number): Promise<DeleteResult> {
    console.log('Genres MS - Service - deleteGenre at', new Date());
    return this.genreRepository.delete(genreId);
  }

  async updateGenre(updateGenreDto: UpdateGenreDto): Promise<UpdateResult> {
    console.log('Genres MS - Service - updateGenre at', new Date());
    return this.genreRepository.update(updateGenreDto.genreId, {
      nameRu: updateGenreDto.genreData.nameRu,
      nameEn: updateGenreDto.genreData.nameEn,
    });
  }
}
