import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnthemDto } from './dto/create-anthem.dto';
import { UpdateAnthemDto } from './dto/update-anthem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnthemService {
  constructor(private readonly prisma: PrismaService) {}

  async checkIfExistById(id: number) {
    const exist = await this.getCurrent().findFirst({
      where: { id },
    });

    return !!exist;
  }

  async create(payload: CreateAnthemDto) {
    const { lyrics } = payload;

    await this.prisma.$transaction(async (tx) => {
      await tx.anthems.create({
        data: {
          id: payload.id,
          name: payload.name,
          description: payload.description,
          backgroundImage: payload.backgroundImage,
          source: payload.source,
          group: payload.group,
        },
      });

      await tx.lyrics.createMany({
        data: lyrics.map((lyric) => ({
          id: lyric.id,
          caption: lyric.caption,
          startTime: lyric.startTime,
          endTime: lyric.endTime,
          anthemId: payload.id,
        })),
      });

      const lyricText: { text: string; lyricId: number }[] = [];

      lyrics.forEach((lyric) => {
        lyric.text.forEach((text) => {
          lyricText.push({ lyricId: lyric.id, text });
        });
      });

      await tx.lyricTexts.createMany({
        data: lyricText,
      });
    });

    return { status: HttpStatus.CREATED, data: 'ok' };
  }

  findAll() {
    return this.getCurrent().findMany();
  }

  async findOne(id: number) {
    return this.getCurrent().findFirst({
      include: {
        lyrics: {
          omit: { anthemId: true },
          include: {
            texts: {
              select: { id: true, text: true },
            },
          },
        },
      },
      omit: { createdAt: true, updatedAt: true },
      where: { id },
    });
  }

  update(id: number, updateAnthemDto: UpdateAnthemDto) {
    return `This action updates a #${id} anthem`;
  }

  async remove(id: number) {
    // TODO: delete everything related to this anthem
    await this.getCurrent().delete({ where: { id } });
    return { status: HttpStatus.OK, data: 'deleted' };
  }

  private getCurrent() {
    return this.prisma.anthems;
  }
}
