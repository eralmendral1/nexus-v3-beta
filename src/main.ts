import { ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api/')
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues : false }))

    const config = new DocumentBuilder()
        .setTitle('Nexus API')
        .setDescription('Nexus API')
        .setVersion('1')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(3000)
}
bootstrap()
