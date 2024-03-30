import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('api/v1/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() data: any) {
    return this.emailService.sendEmailUser(data);
  }
}
