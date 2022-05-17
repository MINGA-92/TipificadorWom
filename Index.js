
const { json } = require('express');
const express= require('express');
const Constructor= express();

Constructor.set('view engine', 'ejs');

Constructor.use(express.urlencoded({extended:false}));
Constructor.use(express(json)); 
Constructor.use('/', require('./router'));

Constructor.listen(3000, function(Peticion, Respuesta){
    console.log("Aplicacion Corriendo En http://localhost:3000         (⌐■_■)");
});
