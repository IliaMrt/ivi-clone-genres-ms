import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';
import { databaseHost, databaseName, databasePassword, databaseUsername } from "./environment/variables";
import { Movie } from './entity/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseHost,
      port: 5432,
      username: databaseUsername,
      password: databasePassword,
      database: databaseName,
      entities: [Genre, Movie],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Genre, Movie]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
