function obtenerMetodoDePago(metodoDePago){
    for(var i=0 ; i< metodoDePago.length;i++){
        if(metodoDePago[i].checked == true) {
            return metodoDePago[i].attributes[0].value
        }
    }
}



function pedido(){
let datosPedido   = {
                        nombre   : document.getElementById('nombre').value ,
                        apellido : document.getElementById('apellido').value,
                        email    : document.getElementById('email').value,
                        direccionDespacho :{
                            direccion  : document.getElementById('direccion').value,
                            direccion2 : document.getElementById('direccion2').value,
                            region     : document.getElementById('region').value,
                            comuna     : document.getElementById('comuna').value

                        } ,
                        fechaDespacho  : document.getElementById('fechaDespacho').value,
                        numeroTargeta  : document.getElementById('numeroTargeta').value,
                        metodoDePago   : obtenerMetodoDePago(document.getElementsByName('metodoDePago')),
                        fechaExpiracion: document.getElementById('fechaExpiracion').value,
                        cvv            : document.getElementById('cvv').value
                    }

   console.log(datosPedido)   
}

