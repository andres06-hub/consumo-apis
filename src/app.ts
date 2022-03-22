// Iniciamos la app
import express from 'express';
//////////////////////////////////////////////////////////
// IMPORTACIONES
// IMPORTAMOS LAS RUTAS
import routerSignup from './routes/signup.routes';
import routerLogin from './routes/login.routes';
import routerComprar from './routes/comprar.routes';
// -------------------------------------------------
import config from './config/index'
import { createConnection } from 'typeorm';

//////////////////////////////////////////////////////////
const app = express();
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

//////////////////////////////////////////////////
app.listen(config.port, ()=>{
    console.log(`

        ********************************************
        🛡️  :: Server on PORT :: ${config.port} :: 🛡️
                name Project ${config.name} 
        ********************************************
    `);
    
})