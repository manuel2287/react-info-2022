const SUPERHEROES_URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const obtenerSuperheroesDelServidor = async () => {
    try {
        const res = await fetch(SUPERHEROES_URL)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

const construirHeader = (
    squadName,
    secretBase,
    homeTown,
    formed
) => `
        <h1 class="header"> ${squadName} </h1>
        <section>
            <ul>
                <li> Ciudad: ${secretBase}</li>
                <li> Base Secreta: ${homeTown} </li>
                <li> Año de Formacion: ${formed} </li>
            </ul>
        </section>
    `;

const formatear = arr => 
    arr
    .reduce((prev, curr) => `${prev}, ${curr}`);

const construirTarjetas = miembros => miembros
        .map(({
            name,
            age,
            powers
        }) => `
                <article class="card">
                    <img src="./assets/img/test-image.jpg" alt="image" />
                    <ul>
                        <li> Nombre: ${name}</li>
                        <li> Edad: ${age}</li>
                        <li> Poderes: ${formatear(powers)}</li>
                    </ul>
                </article>
            `
        )
        .reduce((prev, curr) => `
                ${prev}
                ${curr}
            `
        );

const iniciarPagina = async () => {
    // 1 - Cuando carga la pagina se debe llamar a un servicio
    const {
        squadName,
        secretBase,
        homeTown,
        formed,
        members
    } = await obtenerSuperheroesDelServidor();
    const newm = [...members, ...members, ...members, ...members];
    console.log(newm)
    // 2 - Cuando obtengo la lista de super heroes debo:
    // 2 - 1 - Renderizar informacion del squad
    const header = construirHeader(squadName, secretBase, homeTown, formed);
    const $header = document.querySelector('#super-header');
    $header.innerHTML = header;
    // 2 - 2 - Renderizar informacion de cada miembro
    const tarjetas = construirTarjetas(members);
    const $tarjetas = document.querySelector('.cards');
    $tarjetas.innerHTML = tarjetas;
};

iniciarPagina();
