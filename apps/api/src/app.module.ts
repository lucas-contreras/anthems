import { Module } from '@nestjs/common';
import { AnthemController } from './anthem/anthem.controller';
import { AnthemService } from './anthem/anthem.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AnthemController],
  providers: [AnthemService],
})
export class AppModule {}
