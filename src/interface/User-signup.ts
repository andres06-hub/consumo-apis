// importamos la interface de USER
import { User } from './User';

export interface UserSignup extends User {
    
    firstName : string;
    lastName : string;
    age : number;
    city : string;
}