import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnthemDto } from './dto/create-anthem.dto';
import { UpdateAnthemDto } from './dto/update-anthem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnthemService {
  constructor(private readonly prisma: PrismaService) {}

  async checkIfExistById(id: number) {
    return await this.prisma.checkIfExistById(id, this.getCurrent());
  }

  async create(payload: CreateAnthemDto) {
    await this.getCurrent().create({ data: payload });
    return { status: HttpStatus.CREATED, data: 'ok' };
  }

  findAll() {
    return this.getCurrent().findMany();
  }

  findOne(id: number) {
    return this.getCurrent().findFirst({ where: { id } });
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
