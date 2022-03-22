
// Script para obtener los productos DB

import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';

////////////////////////////////////////////////////////////////

// Obtenemos los productos
export const getProducts = async () => {
    // Obtenemos Todos los productos
    const resultsProducts = await getRepository(Product).find();

    if (!resultsProducts){return undefined;}
    //Retorna los datos obtenidos 
    return resultsProducts;
};

