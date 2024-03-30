import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: "buiminh8690@gmail.com",
          pass: "xggnbvkvnepcxlni",
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule { }
