

var path = window.location.pathname;
var pagina = path.split("/").pop();
console.log( pagina );


if(pagina=="comprar.html"){
    let selcat = 0;
    let preciobase = 200;
    const btndel = document.querySelector("#btnborrar");
    const btnsend = document.querySelector("#btnenviar");
    const nombre = document.getElementById("inpnombre");
    const apellido = document.getElementById("inpapellido");
    const correo = document.getElementById("inpcorreo");
    const parrafo = document.getElementById("parrafototal");
    btndel.addEventListener('click',funcborrar);
    btnsend.addEventListener('click',validateform);


    function funcborrar(){  
        parrafo.innerHTML = "Total a Pagar: $";
    }

    var cantidad = 0;
    var categoria = 0;
    let arrayDescuento =[100,20,50,85];

    console.log("parrafo inner: ${}"+parrafo.innerHTML);


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



}else{

    const btn0 = document.querySelector("#btncomprar0");
    const btn1 = document.querySelector("#btncomprar1");
    const btn2 = document.querySelector("#btncomprar2");

    console.log(btn0);
    btn0.addEventListener('click',goComprar);
    btn1.addEventListener('click',goComprar);
    btn2.addEventListener('click',goComprar);
    function goComprar(){
        document.location.href = "comprar.html";
    }
    
}



