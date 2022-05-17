
const Conexion= require('./Conexion');

/*exports.ConsultaTipificacion= (Peticion, Respuesta)=>{
    
}*/

Consulta= "SELECT REST_DETALLE FROM dbp_tipificadorwom.tbl_restandar WHERE REST_CONSULTA='CONSULTAS' GROUP BY REST_DETALLE;"
Conexion.query(Consulta, (error, Resultados_2, fields)=>{
    if(error){
        console.log("☠ eRrOr / En La Consulta");
        throw error;
    }else{
        console.log(Resultados_2);
        console.log("Copas 😋");
        //Respuesta.render('TipificadorWom', {Resultados_2:Resultados_2});
    };
});

