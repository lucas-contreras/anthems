import { Module } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { LyricsController } from './lyrics.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LyricsController],
  providers: [LyricsService],
  imports: [PrismaModule],
})
export class LyricsModule {}
