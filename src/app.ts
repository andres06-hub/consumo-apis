// Iniciamos la app
import express, { Application } from 'express';
//////////////////////////////////////////////////////////
// IMPORTACIONES
// IMPORTAMOS LAS RUTAS
import routerSignup from './routes/signup.routes';
import routerLogin from './routes/login.routes';
import routerComprar from './routes/comprar.routes';
import routerProducts from './routes/products.routes';
// -------------------------------------------------
import { createConnection } from 'typeorm';

//////////////////////////////////////////////////////////
const app: Application = express();
const morgan = require('morgan');
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

// CONEXION A LA DB
createConnection();

//---------> MIDDLEWARES <--------
app.use(morgan('dev'));


// -------> SETTINGS <---------
// Para que express lea los JSON
app.use(express.json());


//---------> ROUTES <---------
// utilizamos las rutas 
app.use(routerSignup);
app.use(routerLogin);
app.use(routerComprar);
app.use(routerProducts);

export default app;