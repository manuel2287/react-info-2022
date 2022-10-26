const PRODUCTOS_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const obtenerProductosDelServidor = async () => {
    try {
        const res = await fetch(PRODUCTOS_URL)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

const confeccionarTarjetasDeProductos = (productos) => {
    return productos
    .map(producto => {
        return `
            <article class="card">
                <img src="${producto.image}" alt="${producto.image}" />
                <ul>
                    <li> Nombre: ${producto.name}</li>
                    <li> Precio: ${producto.price}</li>
                </ul>
            </article>
        `
    })
    .reduce((prev, curr) => {
        return `
            ${prev}
            ${curr}
        `
    }, '');
}

const listarProductosEnElHTML = async (evento) => {
    // 2 - cuando escucho el evento obtengo la informacion de los productos
    const productos = await obtenerProductosDelServidor();
    // 3 - cuando recibo la informacion de los producto actualizo la pagina
    const tarjetas = confeccionarTarjetasDeProductos(productos);
    $section = document.querySelector('.cards');
    $section.innerHTML = tarjetas;
}

// 1 - escuchar el evento del boton listar
const $boton = document.querySelector('.btn-listar');
$boton.addEventListener('click', listarProductosEnElHTML);
