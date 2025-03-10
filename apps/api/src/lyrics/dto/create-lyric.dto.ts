import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateLyricDto {
  @IsNumber()
  public id: number;
  @IsString()
  public caption: string;
  @IsString()
  public startTime: string;
  @IsString()
  public endTime: string;
  @IsNumber({
    allowNaN: false,
  })
  @IsPositive()
  public anthemId: number;
}
