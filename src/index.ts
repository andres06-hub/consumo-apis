import app from './app';
import config from './config/index'

//////////////////////////////////////////////////
app.listen(config.port, ()=>{
    console.log(`

        ********************************************
        🛡️  :: Server on PORT :: ${config.port} :: 🛡️
                name Project ${config.name} 
        ********************************************
    `);
    
})