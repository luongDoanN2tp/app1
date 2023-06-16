import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateVerifyDto } from './dto/createVerify.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/verify')
  verify(@Body() createVerifyDto: CreateVerifyDto) {
    return this.appService.checkToken(createVerifyDto.token);
  }
}
