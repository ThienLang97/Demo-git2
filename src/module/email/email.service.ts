import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';


@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) { }
  async sendEmailUser(data: any) {
    const pathTemplate = join(__dirname, 'templates', 'confirmation.ejs')
    await this.mailerService.sendMail({
      to: data?.email,
      subject: 'Buy Product',
      template: pathTemplate,
      context: {
        name: data?.name,
        product: data?.product_name,
      }
    })
    return 'gui thanh cong';
  }
}
