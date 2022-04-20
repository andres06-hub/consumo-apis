import app from './app';
import config from './config/index'

//////////////////////////////////////////////////

const start = (port : number, name : string) => {
    try{
        app.listen(config.port, ()=>{
            console.log(`
            ********************************************
            🛡️  :: Server on PORT :: ${port} :: 🛡️
                    name Project ${name} 
            ********************************************
            `);
        });
    }catch (err){
        console.error(err);
        process.exit();
    }
}
////////////////////////////////////////////////////////////////
const port : number = Number(config.port);
const name : string = config.name;
//Iniciamos el proyecto
start(port,name)



