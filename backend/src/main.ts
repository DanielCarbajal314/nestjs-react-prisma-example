import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('NestJs example')
    .setDescription('Posts and Articles example API')
    .setVersion('1.0')
    .addTag('Articles')
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
