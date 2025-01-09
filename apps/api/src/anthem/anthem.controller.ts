import { Controller, Get, Param } from '@nestjs/common';
import { AnthemService } from './anthem.service';

@Controller({ path: 'anthem' })
export class AnthemController {
  constructor(private readonly appService: AnthemService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id')
  getHello2(@Param() id: string) {
    console.log(id);
    return this.appService.getSomething();
  }
}
