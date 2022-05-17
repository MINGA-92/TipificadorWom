
const Conexion= require('./Conexion');

exports.GuardarTipificacion= (Peticion, Respuesta)=>{
    const Identificacion= Peticion.body.Identificacion;
    const Tipificacion= Peticion.body.Tipificacion;
    const Tipificacion_2= Peticion.body.Tipificacion_2;
    const Tipificacion_3= Peticion.body.Tipificacion_3;
    const Plantilla= Peticion.body.Plantilla;
    const TroubleTicket= Peticion.body.TroubleTicket;
    const TiempoCronometro= Peticion.body.TxtCronometro;

    console.log(Identificacion+" / "+Tipificacion+" / "+Tipificacion_2+" / "+Tipificacion_3+" / "+Plantilla+" / "+TroubleTicket+" / "+TiempoCronometro)

    InsercionSQL= "INSERT INTO tbl_tipificaciones(TIP_NUMERO_CLIENT, TIP_DETALLE_TIP1, TIP_DETALLE_TIP2, TIP_DETALLE_TIP3, TIP_PLANTILLA, TIP_TROUBLE_TICKET, TIP_TIEMPO_GESTION, TIP_ESTADO) VALUES('"+Identificacion+"', '"+Tipificacion+"', '"+Tipificacion_2+"', '"+Tipificacion_3+"', '"+Plantilla+"', '"+TroubleTicket+"', '"+TiempoCronometro+"', 'Activo')";
    console.log(InsercionSQL);
    Conexion.query(InsercionSQL, function(error, result){
        if(error){
            console.log("☠ eRrOr / En La Insercion   .l.");
            throw error;
        }else{
            console.log(result);
            console.log('¡Registrado Exitosamente!      😀👍');
            Respuesta.redirect('/');
        }
    });
}
