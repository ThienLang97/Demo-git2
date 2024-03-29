import { EmailEntity } from "src/module/email/entities/email.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id : number

    @Column()
    user_name: string

    @Column()
    user_email: string

    @OneToMany(type=>EmailEntity, (email) => email)
    email: EmailEntity[]
}
