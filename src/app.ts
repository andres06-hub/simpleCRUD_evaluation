// *** Importamos depencias 
import express from 'express';

//IMPORTACIONES
import config from './config'

////////////////////////////////////////////////////////////////
//IMPORTAMOS RUTAS
import routerLogin from './routes/login.routes'

////////////////////////////////////////////////////////////////


//iniciamos la app
const app = express();
//obtenemos el morgan
const morgan =require('morgan');

// ----------> MIDDLEWARE ---------------
app.use(morgan('dev'))


// --------> SETTINGS <------------------
// Para que express reconosca los JSON
app.use(express.json())


// -------------> ROUTES <------------------
//Usamos las RUTAS
app.use(routerLogin);



////////////////////////////////////////////////
// Hacemos llamado a la app
app.listen(config.port, ()=>{
    console.log(`
    ********************************************
    🛡️  :: Server on PORT :: ${config.port} :: 🛡️
            name Project ${config.nameProyect} 
    ********************************************
    `);
    
})