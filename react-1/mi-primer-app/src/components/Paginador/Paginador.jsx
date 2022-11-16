import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    return <Pagination count={cantidadPaginas} color="secondary" onClick={() => onChange(cantidadPaginas+1)}/>
}

export default Paginador;
