import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users/users.module';
import { ProductsModule } from './module/products/products.module';
import { EmailModule } from './module/email/email.module';
import { UserEntity } from './module/users/entities/user.entity';
import { ProductEntity } from './module/products/entities/product.entity';
import { EmailEntity } from './module/email/entities/email.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_ojt',
      entities: [UserEntity, ProductEntity, EmailEntity],
      synchronize: true,
    }),
    UsersModule, ProductsModule, EmailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
