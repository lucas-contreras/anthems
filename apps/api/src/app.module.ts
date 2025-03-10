import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AnthemModule } from './anthem/anthem.module';
import { LyricsModule } from './lyrics/lyrics.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnthemModule,
    LyricsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
