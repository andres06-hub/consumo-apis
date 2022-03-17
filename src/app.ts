// Iniciamos la app
import express from 'express';
//////////////////////////////////////////////////////////
// IMPORTACIONES
import routerSignup from './routes/signup.routes';
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


//////////////////////////////////////////////////
app.listen(config.port, ()=>{
    console.log(`

        ********************************************
        🛡️  :: Server on PORT :: ${config.port} :: 🛡️
                name Project ${config.name} 
        ********************************************
    `);
    
})