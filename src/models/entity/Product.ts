import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

//CReamos la entidad
@Entity()
export class Product {

    //Generamos los campos necesarios
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string;

    @Column()
    price : number;
}
