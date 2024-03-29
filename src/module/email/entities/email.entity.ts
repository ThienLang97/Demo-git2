import { ProductEntity } from "src/module/products/entities/product.entity";
import { UserEntity } from "src/module/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmailEntity {
    @PrimaryGeneratedColumn()
    email_id: number

    @ManyToOne(type => UserEntity, (user) => user.email)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity

    @ManyToOne(type => ProductEntity, (user) => user.email)
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity
}
