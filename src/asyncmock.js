const productos = [
    { nombre: "Six Quilmes 473cc", precio: 1500, id: "1", img: "../img/quilmes.jpg", idCat: "cervezas", inicial: 1, stock: 20 },
    { nombre: "Promo Fernet + Coca 3L", precio: 2800, id: "2", img: "../img/promo-fernet.jpg", idCat: "promos", inical: 1, stock: 8 },
    { nombre: "Vino Trumpeter Malbec 750cc", precio: 2300, id: "3", img: "../img/trumpeter.jpeg", idCat: "vinos", inicial: 1, stock: 18 },
    { nombre: "Vino Salentein Reserva Malbec 750cc", precio: 2100, id: "4", img: "../img/salentein.jpeg", idCat: "vinos", inicial: 1, stock: 4 },
    { nombre: "Six Stella 473cc", precio: 2200, id: "5", img: "../img/stella.jpg", idCat: "cervezas", inicial: 1, stock: 7 },
    { nombre: "Six Heineken 330cc", precio: 2500, id: "6", img: "../img/heineken.jpg", idCat: "cervezas", inicial: 1, stock: 8 },
    { nombre: "Six Salta Negra 473cc", precio: 1600, id: "7", img: "../img/salta.jpg", idCat: "cervezas", inicial: 1, stock: 4 },
    { nombre: "Fernet Branca 750cc", precio: 2300, id: "8", img: "../img/fernet.jpg", idCat: "aperitivos", inicial: 1, stock: 8 },
    { nombre: "Campari 750cc", precio: 2200, id: "9", img: "../img/campari.jpg", idCat: "aperitivos", inicial: 1, stock: 10 },
    { nombre: "Gancia 950cc", precio: 1000, id: "10", img: "../img/gancia.jpg", idCat: "aperitivos", inical: 1, stock: 6 },
    { nombre: "Vino Rutini Malbec 750cc", precio: 6950, id: "11", img: "../img/rutini.jpeg", idCat: "vinos", inicial: 1, stock: 5 },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}





