import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Whenever nest.js encounters any of decortors , it will know to execute
app.useGlobalPipes(new ValidationPipe()); // Mandatory to enable pipes

await app.listen(3000);
}
bootstrap();
