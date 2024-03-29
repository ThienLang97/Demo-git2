import { EmailEntity } from "src/module/email/entities/email.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    product_id: number

    @Column()
    product_name: string

    @Column()
    price: number

    @Column()
    quantity: number

    @OneToMany(type => EmailEntity, (email) => email)
    email: EmailEntity[]
}
