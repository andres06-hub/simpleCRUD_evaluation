//importamos 
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//Creamos la entidad
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;

    @Column()
    password : string;

}