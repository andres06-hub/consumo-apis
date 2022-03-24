
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

//Obtenemos un producto en especifico
export const getProduct = async (idProduct : number) => {
    // Obtener producto 
    const resultProduct = await getRepository(Product).findOne( idProduct );
    return resultProduct;
}

