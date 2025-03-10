import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

type PrismaEntityType = Prisma.AnthemsDelegate<
  DefaultArgs,
  Prisma.PrismaClientOptions
>;

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }

  async checkIfExistById(id: number, entity: PrismaEntityType) {
    const exist = await entity.findFirst({
      where: { id },
    });

    return !!exist;
  }
}
