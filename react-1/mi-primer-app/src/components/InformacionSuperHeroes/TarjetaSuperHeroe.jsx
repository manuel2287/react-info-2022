import ImagenSuperHeroe from "./ImagenSuperHeroe";
import InformacionSuperHeroe from "./InformacionSuperHeroe";
import './InformacionSuperHeroes.css';

const TarjetaSuperHeroe = ({
    name,
    age,
    powers
}) => {
    return (
        <article className="informacion-super-heroe">
            <ImagenSuperHeroe />
            <InformacionSuperHeroe 
                name={name}
                age={age}
                powers={powers}
            />
        </article>
    )
}

export const TarjetaSuperHeroeList = ({
    miembros
}) => {
    return (
        <section className="informacion-super-heroes">
        { 
            miembros.map((miembro, index) => 
                <TarjetaSuperHeroe
                    key={index}
                    {...miembro}
                />
            )
        }
        </section>
    )
}

export default TarjetaSuperHeroe;
