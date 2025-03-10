import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { AnthemService } from './anthem.service';
import { CreateAnthemDto } from './dto/create-anthem.dto';
import { UpdateAnthemDto } from './dto/update-anthem.dto';

@Controller('anthems')
export class AnthemController {
  constructor(private readonly anthemService: AnthemService) {}

  @Post()
  async create(@Body() createAnthemDto: CreateAnthemDto) {
    const exist = await this.anthemService.checkIfExistById(createAnthemDto.id);

    if (exist) {
      throw new BadRequestException(
        `The id ${createAnthemDto.id} exists in the database`,
      );
    }
    return this.anthemService.create(createAnthemDto);
  }

  @Get()
  findAll() {
    return this.anthemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.anthemService.findOne(+id);

    if (!result) {
      throw new NotFoundException(`There's not any anthem with that ID ${id}`);
    }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnthemDto: UpdateAnthemDto) {
    return this.anthemService.update(+id, updateAnthemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anthemService.remove(+id);
  }
}
