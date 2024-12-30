import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './products/config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //1 Prefijo global para las rutas
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  ///1 consumir una variable de entorno
  await app.listen(envs.port);
  console.log(`Server running on port ${envs.port}`);
  console.log(`${typeof(envs.port)}`);
}
bootstrap();
