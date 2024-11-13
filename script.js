
function principal() {
  let  produtos = [
    {id:1, nombre:"remera nike", precio: 20000, stock: 20 , tipo:"remeras"},
    {id:2, nombre:"remera adidas", precio: 15000 , stock: 22, tipo:"remeras"},
    {id:3, nombre:"remera puma", precio:17000 , stock:19 , tipo:"remeras"},
    {id:4, nombre:"pantalon nike", precio:30000 , stock:12 , tipo:"pantalones"},
    {id:5, nombre:"pantalon adidas", precio: 20000 , stock:11 , tipo:"pantalones"},
    {id:6, nombre:"pantalon puma", precio:23000 , stock: 20, tipo: "pantalones"},
    {id:7, nombre:"zapatillas nike", precio:190000 , stock:4 , tipo:"calzado"},
    {id:8, nombre:"zapatillas puma", precio: 180000 , stock:10 , tipo:"calzado"},
    {id:9, nombre:"zapatillas adidas", precio:200000 , stock: 6, tipo:"calzado"},
   
  ]
  
  let entrada = pedirNumero("ingrese: \n 1 - para agregar al carrito \n 2 - para filtrar por categoria \n 3 - para finalizar compra \n 0 - para salir ")
  let carrito = []
 while (entrada !== 0 ) {
  if (entrada === 1) {
    let pedirId = pedirNumero("ingrese el id del producto" + "\n" + listaProductos(produtos))
    carrito =  agregarAlCarrito(carrito, productos, pedirId)
  } else if (entrada === 2) {
    
    let categoriaPedida = pedirMensaje("ingrese el nombre de la categoria que desea agregar al carrito" ).toLowerCase()
    let tipoCategoria = filtrar(productos,categoria, categoriaPedida)
    let pedirId = pedirNumero("ingrese el id del producto" + "\n" + listaProductos(produtos))
    carrito =  agregarAlCarrito(carrito, productos, pedirId)
  } else if (entrada === 3) {
   
  } else {}
    
    entrada = pedirNumero("ingrese: \n 1 - para agregar al carrito \n 2 - para filtrar por categoria \n 3 - para finalizar compra \n 0 - para salir ")
 }
   
  
  }



function pedirNumero(numero) {
   return Number(prompt(numero))
}

function pedirMensaje(mensaje) {
return prompt(mensaje)
}


function listaProductos(lista) {
  return lista.map(elemento => "ID: " + elemento.id + " - " + elemento.nombre + " tipo: " + elemento.tipo).join("\n")
}

function agregarAlCarrito(carrito, productos, id) {
  let productoBuscado = productos.find(producto => producto.id === id)
  let indiceProductoBuscado = productos.findIndex(producto => producto.id === id)
  if(indiceProductoBuscado !== -1) {
    carrito[indiceProductoBuscado].unidades++
    carrito[indiceProductoBuscado].subtotal = carrito[indiceProductoBuscado].precioUnidad * carrito[indiceProductoBuscado].unidades
  } else {
    carrito.push({
      id: productoBuscado.id,
      nombre: productoBuscado.nombre,
      precioUnidad:productoBuscado.precio,
      unidades:1,
      subtotal:productoBuscado.precio
  })
  }
  console.log(carrito)
  return carrito
}

function categorias(productos) {
let distintasCategorias = []
productos.forEach(producto => {
  if (!distintasCategorias.includes(producto.categoria)) {
    distintasCategorias.push(producto.categoria)
  }
});
return distintasCategorias
}

function filtrar(productos, nombre, valor) {
  return productos.filter(producto => producto[nombre] === valor)
}
 principal() 



 