
const Conexion= require('./Controles/Conexion');
const express= require('express');
const router= express.Router();

//Ruta Principal
router.get('/', (Peticion, Respuesta)=>{
    ConsultaType_1="SELECT REST_CONSULTA FROM dbp_tipificadorwom.tbl_restandar GROUP BY REST_CONSULTA"
    Conexion.query(ConsultaType_1, (error, Resultados, fields)=>{
        if(error){
            console.log("☠ eRrOr / En La Consulta");
            throw error;
        }else{
            console.log(Resultados);
            Respuesta.render('TipificadorWom', {Resultados:Resultados});
        };
    });
    //Respuesta.render('TipificadorWom');
});

//Redireccion a Consultar Listas Desplegables
router.get('/Consultar/:ValorType', (Peticion, Respuesta)=>{
    const Valor= Peticion.params.ValorType;
    Consulta= "SELECT REST_DETALLE FROM dbp_tipificadorwom.tbl_restandar WHERE REST_CONSULTA='"+Valor+"' GROUP BY REST_DETALLE;"
    Conexion.query(Consulta, (error, Resultados_2, fields)=>{
        if(error){
            console.log("☠ eRrOr / En La Consulta De Listas Desplegables");
            throw error;
        }else{
            console.log(Resultados_2);
            Respuesta.json(Resultados_2);
        };
    });
});

//Redireccion a Consultar Listas Desplegables 2
router.get('/Consultar2/:ValorType_2', (Peticion, Respuesta)=>{
    const Valor_2= Peticion.params.ValorType_2;
    console.log(Valor_2)
    Consulta_2= "SELECT REST_DETALLE_2 FROM dbp_tipificadorwom.tbl_restandar WHERE REST_DETALLE='"+Valor_2+"' GROUP BY REST_DETALLE_2;"
    Conexion.query(Consulta_2, (error, Resultados_3, fields)=>{
        if(error){
            console.log("☠ eRrOr / En La Consulta De Listas Desplegables 2");
            throw error;
        }else{
            console.log(Resultados_3);
            Respuesta.json(Resultados_3);
        };
    });
});

//Redireccion a Consultar Plantilla
router.get('/ConsultarPlantilla/:ValorType_3', (Peticion, Respuesta)=>{
    const Valor_3= Peticion.params.ValorType_3;
    console.log(Valor_3)
    Consulta_2= "SELECT REST_DETALLE_4 FROM dbp_tipificadorwom.tbl_restandar WHERE REST_DETALLE_2='"+Valor_3+"' GROUP BY REST_DETALLE_4;"
    Conexion.query(Consulta_2, (error, Resultados_4, fields)=>{
        if(error){
            console.log("☠ eRrOr / En La Consulta De Plantillas");
            throw error;
        }else{
            console.log(Resultados_4);
            Respuesta.json(Resultados_4);
        };
    });
});


//Enviando Datos del formulario Para Insertar
const Guardando= require('./Controles/Guardar');
router.post('/GuardarTipificacion', Guardando.GuardarTipificacion);


/*
//Validar si ya existe Trouble Ticket
router.get('./Controles/GuardarTipificacion/:TroubleTicket', (Peticion, Respuesta)=>{
    const TroubleTicket= Peticion.params.TroubleTicket;
    console.log(TroubleTicket)
    Consulta2= "SELECT * FROM dbp_tipificadorwom.tbl_tipificaciones WHERE TIP_TROUBLE_TICKET= '"+TroubleTicket+"';"
    Conexion.query(Consulta2, (error, Resultados_2, fields)=>{
        if(error){
            console.log("☠ eRrOr / En La Consulta2");
            throw error;
        }else{
            console.log(Resultados_2);
            CantidadResultados= Resultados_2.length;
            console.log(CantidadResultados);
            if(CantidadResultados > 0){
                alert("!El Numero De Trouble Ticket Ya Existe!")
                Respuesta.render('TipificadorWom');
            }else{
                //Enviando Datos del formulario Para Insertar
                const Guardando= require('./Controles/Guardar');
                router.post('/GuardarTipificacion', Guardando.GuardarTipificacion);
            }
        };
    });
});
*/

router.get('/TipificadorWom', (Peticion, Respuesta)=>{
    Respuesta.send('Contenido Pagina');
});


module.exports= router;
