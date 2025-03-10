import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { CreateLyricDto } from './dto/create-lyric.dto';
import { UpdateLyricDto } from './dto/update-lyric.dto';

@Controller('lyrics')
export class LyricsController {
  constructor(private readonly lyricsService: LyricsService) {}

  @Post()
  async create(@Body() payload: CreateLyricDto) {
    const exist = await this.lyricsService.checkIfExistById(payload.id);

    if (exist) {
      throw new BadRequestException(
        `The id ${payload.id} exists in the database`,
      );
    }
    return this.lyricsService.create(payload);
  }

  @Get(':anthemId')
  findAll(@Param('anthemId') anthemId: string) {
    return this.lyricsService.findAll(+anthemId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lyricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLyricDto: UpdateLyricDto) {
    return this.lyricsService.update(+id, updateLyricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lyricsService.remove(+id);
  }
}
