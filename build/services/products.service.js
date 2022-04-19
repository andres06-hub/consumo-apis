"use strict";
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
exports.validateProduct = void 0;
const products_db_1 = require("../models/schema/products-db");
//////////////////////////////////////////////////////////
// Validar productos
const validateProduct = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtenemos el producto por medio del id obtenido
    const productFound = yield (0, products_db_1.getProduct)(idProduct);
    // Validamos si el producto existe
    // SI el producto esxite se negara esta condicion y seguira
    if (!productFound)
        return undefined;
    // Retornamos el producto
    return productFound;
});
exports.validateProduct = validateProduct;
