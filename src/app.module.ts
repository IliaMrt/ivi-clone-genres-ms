import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';
import { databaseHost } from './environment/variables';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseHost,
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'genres',
      entities: [Genre],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Genre]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
