let selcat = 0;
let preciobase = 200;




const nombre = document.getElementById("inpnombre");
const apellido = document.getElementById("inpapellido");
const correo = document.getElementById("inpcorreo");
const parrafo = document.getElementById("parrafototal");


var cantidad = 0;
var categoria = 0;
let arrayDescuento =[100,20,50,85];

console.log(parrafo.innerHTML);


function funcborrar(){  
    parrafo.innerHTML = "Total a Pagar: $";
  
}

function validateform(){  
    if(nombre.value == null || nombre.value ==''){
    alert("Nombre no puede estar vacío");
        }else if(apellido.value == null || apellido.value ==''){
            alert("Apellido no puede estar vacío");
            }else if(correo.value == null || correo.value ==''){
                alert("Correo no puede estar vacío");
                }else if(cantidad == null || cantidad =='' || cantidad == 0){
                    alert("Cantidad debe ser mayor que Cero");
                    }else if(categoria == null || categoria =='' || categoria == 0){
                        alert("Elegir una categoría");
    }else{
        parrafo.innerHTML = "Total a Pagar: $" + setTotal(cantidad,categoria);
    }
}       

function setQ(selectedcantidad){  
    cantidad = selectedcantidad;
    console.log(cantidad);
}

function setCat(selectedcategoria){  
    categoria = selectedcategoria;
    console.log(categoria);
}

function setTotal(localTotal, localSelDescuento){  
    return 200 * localTotal * arrayDescuento[localSelDescuento] / 100 ;
}