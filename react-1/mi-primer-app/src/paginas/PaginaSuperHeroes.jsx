import { useEffect } from "react";
import { useState } from "react";
import InformacionEquipo from "../components/InformacionEquipo/InformacionEquipo";
import { TarjetaSuperHeroeList } from "../components/InformacionSuperHeroes/TarjetaSuperHeroe";
import Titulo from "../components/Titulo/Titulo";
import { getSuperHeroes } from "../servicios/superheroes";
import './PaginaSuperHeroes.css'

const PaginaSuperHeroes = () => {
    const [informacion, setInformacion] = useState();
    const [loading, setLoading] = useState(false);
    const getSuperHeroesServicio = async () => {
        const res = await getSuperHeroes();
        setInformacion(res);
        setLoading(false)
    }

    useEffect(() => {
        if(!informacion) {
            setLoading(true);
            getSuperHeroesServicio();
        }
    }, [informacion]);

    const componente = <img src="https://media.tenor.com/ZqgX_wttrvAAAAAM/goku.gif" alt="goku" />;
    if(loading || !informacion) {
        return componente;
    }

    return (
        <main className="super-page-container">
            <Titulo 
                tipo='h1'
                titulo={informacion.squadName}
            />
            <InformacionEquipo
                ciudad={informacion.homeTown}
                anioFormacion={informacion.formed}
                baseSecreta={informacion.secretBase}
            />
            <Titulo
                tipo='h2'
                titulo='Miembros'
            />
            <TarjetaSuperHeroeList 
                miembros={informacion.members}
            />
        </main>
    )
}

export default PaginaSuperHeroes;