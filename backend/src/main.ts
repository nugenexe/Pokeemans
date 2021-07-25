import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotENVConfig } from 'dotenv';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  dotENVConfig();
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); // TODO define specific ports
  await app.listen(process.env.PORT);

  // Logger.log('test' + process.env.PORT); // TODO remove this
}
bootstrap();
