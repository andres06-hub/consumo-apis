"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Iniciamos la app
const express_1 = __importDefault(require("express"));
//////////////////////////////////////////////////////////
// IMPORTACIONES
// IMPORTAMOS LAS RUTAS
const signup_routes_1 = __importDefault(require("./routes/signup.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const comprar_routes_1 = __importDefault(require("./routes/comprar.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
// -------------------------------------------------
const typeorm_1 = require("typeorm");
//////////////////////////////////////////////////////////
const app = (0, express_1.default)();
const morgan = require('morgan');
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// CONEXION A LA DB
(0, typeorm_1.createConnection)();
//---------> MIDDLEWARES <--------
app.use(morgan('dev'));
// -------> SETTINGS <---------
// Para que express lea los JSON
app.use(express_1.default.json());
//---------> ROUTES <---------
// utilizamos las rutas 
app.use(signup_routes_1.default);
app.use(login_routes_1.default);
app.use(comprar_routes_1.default);
app.use(products_routes_1.default);
exports.default = app;
