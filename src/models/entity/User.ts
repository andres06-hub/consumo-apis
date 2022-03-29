import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// Se crea la entidad 
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    age : number;

    @Column()
    city : string;

    @Column()
    email : string;

    @Column()
    password : string;

}