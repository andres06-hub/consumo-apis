
// Script para obtener los productos DB

import { getRepository } from 'typeorm';
import { Product } from '../entity/Products';

////////////////////////////////////////////////////////////////

// Obtenemos los productos
export const getProducts = () => {
    // Obtenemos Todos los productos
    const resultsProducts = getRepository(Product).find();

    if (!resultsProducts){return undefined;}
    //Retorna los datos obtenidos 
    return resultsProducts;
};

