const SUPERHEROES_URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

export const getSuperHeroes = async () => {
    const respuesta = await fetch(SUPERHEROES_URL);
    return respuesta.json();
};
