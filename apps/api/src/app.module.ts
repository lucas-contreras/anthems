import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AnthemModule } from './anthem/anthem.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnthemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
