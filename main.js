
//STOCK DE MI TIENDA "Marcel"

const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("Bolso", 30000, 18)
let producto2 = new Producto ("Bolso mochila", 35000, 5)
let producto3 = new Producto ("Mochila urbana", 25000, 15)
let producto4 = new Producto ("Cartera", 18000, 11)
let producto5 = new Producto ("Riñonera", 20000, 0)


let listaProductos = [producto1,producto2,producto3,producto4,producto5]

function encontrarProducto() {
    let palabraClave = prompt("Ingrese el producto que busca ").trim().toUpperCase()
    let resultado = listaProductos.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)

    }else{
        alert("No se encontró coincidencia con "+palabraClave+". Aquí podrá encontrar bolsos y carteras.")
    }

}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del nuevo producto ").trim()
    let precio = parseFloat(prompt("Ingrese el precio del nuevo producto "))
    let stock = parseInt(prompt("Ingrese la cantidad de stock "))


    if (isNaN(precio) || (nombre==="") || isNaN(stock)){
        alert("Por favor, ingrese datos válidos.")
    return;
    }
    let productoX = new Producto (nombre,precio,stock)
    listaProductos.push(productoX)
    console.table(listaProductos)
}


function ingreso() {
    const rolPermitido = "tutor"
    let nombreRol = prompt("Bienvenido al sistema de MARCEL tienda. Sólo se permiten TUTORES. Ingrese su rol. ")
    let rolMinuscula = nombreRol.toLowerCase();
    if (rolMinuscula == "") {
       console.warn("No se ha ingresado ningún dato.")
       return
    }
    while (rolMinuscula != rolPermitido) {
       console.error("ACCESO DENEGADO. INTRUSO! INTRUSO!")
       //nombreRol = prompt("Bienvenido/a. Aquí sólo se permiten TUTORES. Por favor, indique su rol en Coder House. ")
       break;
    }
    if (rolMinuscula == "tutor") {
       let respuesta = prompt("Desea BUSCAR productos? SI / NO").toUpperCase()
            if (respuesta == "SI"){
                encontrarProducto()
            }else {
                    let resp2 = prompt("Desea AGREGAR productos? SI / NO").toUpperCase()
                        if (resp2 == "SI"){
                            agregarProducto()
                        }else{
                            alert("Hasta la próxima visita.")
                        }
                }
            }

    }
 
 
 ingreso()
