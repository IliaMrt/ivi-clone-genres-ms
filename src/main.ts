import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const rmqUrl = process.env.RMQ_URL || 'amqp://localhost:5672'; // 'amqp://localhost:5672' if starting on localhost else 'amqp://rabbitmq:5672'
const port = process.env.APP_PORT || 3200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [rmqUrl],
      queue: 'toGenresMs',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(port, () => console.log(`Genres MS started on ${port}.`));
}
bootstrap();
