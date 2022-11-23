import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaPeliculas } from "../components/Peliculas/Pelicula";
import { getListadoPeliculas } from "../servicios/peliculas";
import { useSearchParams } from "react-router-dom";

const PaginaBuscador = () => {
    const [peliculas, setPeliculas] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarPelicula(pagina)
        }
    }, [searchParams, pagina]);

    const buscarPelicula = async () => {
        setIsLoading(true);
        const { Search: pelis, totalResults } = await getListadoPeliculas(searchParams.get('query'), pagina);
        setPeliculas(pelis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };

    return (
        <Container maxWidth='sm'>
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { peliculas && <ListaPeliculas peliculas={peliculas}/> }
            { peliculas && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
        </Container>
    )
}

export default PaginaBuscador;