import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLyricDto } from './dto/create-lyric.dto';
import { UpdateLyricDto } from './dto/update-lyric.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LyricsService {
  constructor(private readonly prisma: PrismaService) {}

  async checkIfExistById(id: number) {
    return await this.prisma.checkIfExistById(id, this.getCurrent());
  }

  async create(payload: CreateLyricDto) {
    await this.getCurrent().create({ data: payload });
    return { status: HttpStatus.CREATED, data: 'ok' };
  }

  findAll(anthemId: number) {
    return this.getCurrent().findMany({ where: { anthemId } });
  }

  findOne(id: number) {
    return this.getCurrent().findFirst({ where: { id } });
  }

  update(id: number, updateLyricDto: UpdateLyricDto) {
    return `This action updates a #${id} lyric`;
  }

  async removeAll(anthemId: number) {
    // TODO: remove all lyrics texts related to this anthem
    await this.getCurrent().deleteMany({ where: { anthemId: anthemId } });
    return { status: HttpStatus.OK, data: 'deleted' };
  }

  async remove(id: number) {
    await this.getCurrent().delete({ where: { id } });
    return { status: HttpStatus.OK, data: 'deleted' };
  }

  private getCurrent() {
    return this.prisma.lyrics;
  }
}
