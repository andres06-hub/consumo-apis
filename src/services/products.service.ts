import { getProduct } from '../models/schema/products-db'
//////////////////////////////////////////////////////////
// Validar productos
export const validateProduct = async (idProduct:number)=>{

    // Obtenemos el producto por medio del id obtenido
    const productFound = await getProduct(idProduct);

    // Validamos si el producto existe
    // SI el producto esxite se negara esta condicion y seguira
    if(!productFound) return undefined;

    // Retornamos el producto
    return productFound;

}