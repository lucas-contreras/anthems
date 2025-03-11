import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLyricDto {
  @IsNumber()
  public id: number;
  @IsString()
  public caption: string;
  @IsString()
  public startTime: string;
  @IsString()
  public endTime: string;
  @IsArray()
  @Type(() => CreateLyricDto)
  text: string[];
}

export class CreateAnthemDto {
  @IsNumber()
  public id: number;
  @IsString()
  public name: string;
  @IsString()
  public description: string;
  @IsString()
  public backgroundImage: string;
  @IsString()
  public source: string;
  @IsString()
  @IsOptional()
  public group: string;
  @IsArray()
  @Type(() => CreateLyricDto)
  lyrics: CreateLyricDto[];
}
