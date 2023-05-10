import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { databaseHost, port, rmqUrl } from './environment/variables';

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
  await app.listen(port, () => {
    console.log(`Genres MS started on ${port}.`);
    console.log('Application variables:');
    console.log('RabbitMQ address: ', rmqUrl);
    console.log('Database host: ', databaseHost);
  });
}
bootstrap();
