//////////////////////////////////////////
// Importamos

import express from 'express';
import { Request, Response } from 'express';

///////////////////////////////////////////
const router = express.Router();

router.route('/productos')
    .get((req:Request, res:Response) => {

        // Mostrar todos los productos 
        
    })
