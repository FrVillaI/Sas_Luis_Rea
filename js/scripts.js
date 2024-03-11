var carrito = []

function agregarProducto(producto, precio) {

    let indice = carrito.findIndex(c => c.producto === producto)

    if (indice == -1) {
        carrito.push(
            {
                "producto": producto,
                "precio": precio,
                "cantidad": 1
            }
        )

    } else {
        carrito[indice].cantidad++
    }
    actualizarTabla()
}

function actualizarTabla() {
    let tbody = document.getElementById('tbody')
    let total = 0;

    tbody.innerHTML = ""

    for (let item of carrito) {
        let fila = tbody.insertRow()

        let celdaProducto = fila.insertCell(0)
        let celdaPrecio = fila.insertCell(1)
        let celdaCantidad = fila.insertCell(2)

        celdaProducto.textContent = item.producto
        celdaPrecio.textContent = item.precio * item.cantidad
        celdaCantidad.textContent = item.cantidad

        total = total + item.precio * item.cantidad;
    }

    document.getElementById('total').textContent = total
}