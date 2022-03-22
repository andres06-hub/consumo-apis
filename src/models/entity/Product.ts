
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Creamos la entidad
@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    price : number;

}
