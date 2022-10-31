import InformacionEquipo from "../components/InformacionEquipo";
import TarjetaSuperHeroe from "../components/TarjetaSuperHeroe";
import Titulo from "../components/Titulo";
import './PaginaSuperHeroes.css'

const PaginaSuperHeroes = () => {
    return (
        <main className="super-page-container">
            <Titulo titulo='Super Hero Squad'/>
            <InformacionEquipo />
            <Titulo titulo='Miembros'/>
            <TarjetaSuperHeroe />
        </main>
    )
}

export default PaginaSuperHeroes;