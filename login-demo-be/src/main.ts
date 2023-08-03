import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from './config/http-exception.filter';
import { AppModule } from './app/app.module';
import { logger } from './config/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // app.use(logger)

  //swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API Decription')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
