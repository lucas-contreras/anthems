import { IsNumber, IsOptional, IsString } from 'class-validator';

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
}
