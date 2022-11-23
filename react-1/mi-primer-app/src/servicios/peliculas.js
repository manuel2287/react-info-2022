const API_KEY = 'f1bc660c'
const OMDB_API = 'https://www.omdbapi.com';

export const getListadoPeliculas = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&s=${criterioBusqueda}&page=${paginaActual}`);
    const peliculas = await respuesta.json();
    return peliculas;
}

export const getPelicula = async idPelicula => {
    const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&i=${idPelicula}`);
    const pelicula = await respuesta.json();
    return pelicula;
}

