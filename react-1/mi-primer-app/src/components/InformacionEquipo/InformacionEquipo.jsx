import './InformacionEquipo.css';

const InformacionEquipo = ({
    ciudad,
    anioFormacion,
    baseSecreta
}) => {
    return (
        <section className='informacion-equipo'>
            <ul>
                <li> Ciudad: {ciudad}</li>
                <li> Base Secreta: {anioFormacion}</li>
                <li> Año de Formacion: {baseSecreta}</li>
            </ul>
        </section>
    );
}

export default InformacionEquipo;
