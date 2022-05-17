
const SQL= require('mysql');
const Conexion = SQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbp_tipificadorwom'
});

Conexion.connect(function(error){
    if(error){
        console.log(' 😒   ¡No Hay Conexion a La Base De Datos!   😒 ')
        throw error;
    }else{
        console.log(' ¡Conectado a La Base De Datos!   😉👍 ')
    }
});

module.exports= Conexion;
//Conexion.end();