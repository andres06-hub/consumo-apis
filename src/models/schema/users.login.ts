import { getRepository } from 'typeorm';
import { User } from '../entity/User';
//////////////////////////////////////////////////////////////
// ! CONTROLADOR PARA BUSCAR USUARIOS 

export const getUser = async (email: string) : Promise<User | undefined> => {
    // Buscamos el usuario
    return getRepository(User).findOne({ email });
}