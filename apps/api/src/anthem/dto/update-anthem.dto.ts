import { PartialType } from '@nestjs/mapped-types';
import { CreateAnthemDto } from './create-anthem.dto';

export class UpdateAnthemDto extends PartialType(CreateAnthemDto) {}
