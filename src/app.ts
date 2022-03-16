// Iniciamos la app
import express from 'express';

const app = express();

const morgan = require('morgan');
////////////////////////////////////////////////////////////////
import config from './config/index'

////////////////////////////////////////////////////////////////

//---------> MIDDLEWARES <--------
app.use(morgan('dev'));


// -------> SETTINGS <---------




//---------> ROUTES <---------




//////////////////////////////////////////////////
app.listen(config.port, ()=>{
    console.log(`

        ********************************************
        🛡️  :: Server on PORT :: ${config.port} :: 🛡️
                name Project ${config.name} 
        ********************************************
    `);
    
})