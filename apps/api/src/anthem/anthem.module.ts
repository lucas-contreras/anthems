import { Module } from '@nestjs/common';
import { AnthemService } from './anthem.service';
import { AnthemController } from './anthem.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnthemController],
  providers: [AnthemService],
  imports: [PrismaModule],
})
export class AnthemModule {}
