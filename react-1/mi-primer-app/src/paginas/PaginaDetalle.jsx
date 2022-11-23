import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import Pelicula, { ListaPeliculas } from "../components/Peliculas/Pelicula";
import { getListadoPeliculas, getPelicula } from "../servicios/peliculas";
import { useParams, useSearchParams } from "react-router-dom";

const PaginaDetalle = () => {
    const [pelicula, setPelicula] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams()
    useEffect(() => {
        if (id && !pelicula) {
            getPeliculaDelServicio();
        }
    }, [id, pelicula]);

    const getPeliculaDelServicio = async () => {
        setIsLoading(true)
        const peli = await getPelicula(id);
        setPelicula(peli);
        setIsLoading(false)
    };


    if (pelicula && pelicula.Error || !pelicula) {
        return (
            <Container maxWidth='sm'>
                La pelicula no se encontro {id}
            </Container>
        )
    }

    if(isLoading && !pelicula) {
        return <Loading />
    }

    return (
        <Container maxWidth='sm'>
            <Pelicula pelicula={pelicula}/>
        </Container>
    )
}

export default PaginaDetalle;