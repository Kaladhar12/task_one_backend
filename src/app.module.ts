import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SubtopicsController } from './subtopics/subtopics.controller';
import { SubtopicsDescController } from './subtopics_desc/subtopics_desc.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
  ],
  controllers: [AppController, BooksController, SubtopicsController, SubtopicsDescController],
  providers: [AppService],
})
export class AppModule {}
