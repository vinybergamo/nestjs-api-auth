import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('PORT', 3333);
  const reflector = app.get(Reflector);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector, {
      excludePrefixes: ['_'],
    }),
  );

  const documentBuilder = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(port, () => {
    logger.log(`Server listening on port ${port}`);
  });
}
bootstrap();
