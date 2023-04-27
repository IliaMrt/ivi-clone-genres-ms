import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'general',
      entities: [Genre],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Genre]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
