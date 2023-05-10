import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';

const databaseHost = process.env.DB_HOST || 'localhost'; // 'localhost' if starting on localhost

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseHost,
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
