import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],  // 'amqp://localhost:5672' if starting on localhost else 'amqp://rabbitmq:5672'
      queue: 'toGenresMs',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3200, () => console.log('Genres MS started on 3200.'));
}
bootstrap();
