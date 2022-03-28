// importamos la interface de USER
import { User } from './User';

export interface UserSignup extends User {
    //Atributos
    firstName : string;
    lastName : string;
}