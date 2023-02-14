import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api/')
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues : false }))

    // app.setGlobalPrefix('/api/', { exclude: [] });

    const config = new DocumentBuilder()
        .setTitle('Nexus-beta')
        .setDescription('Nexus API Description')
        .setVersion('0.1')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(3000)
}
bootstrap()
