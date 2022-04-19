"use strict";
// Script para obtener los productos DB
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../entity/Product");
////////////////////////////////////////////////////////////////
// Obtenemos los productos
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    // Obtenemos Todos los productos
    const resultsProducts = yield (0, typeorm_1.getRepository)(Product_1.Product).find();
    if (!resultsProducts) {
        return undefined;
    }
    //Retorna los datos obtenidos 
    return resultsProducts;
});
exports.getProducts = getProducts;
//Obtenemos un producto en especifico
const getProduct = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener producto 
    const resultProduct = yield (0, typeorm_1.getRepository)(Product_1.Product).findOne(idProduct);
    return resultProduct;
});
exports.getProduct = getProduct;
