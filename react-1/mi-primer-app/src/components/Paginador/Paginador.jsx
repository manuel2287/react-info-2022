import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina);
    };

    return (
        <Pagination
            count={cantidadPaginas}
            color="secondary"
            onChange={cambiaPagina}
        />
    );
}

export default Paginador;
