const InformacionSuperHeroe = ({
    name,
    age,
    powers
}) => {
    return (
        <ul>
            <li> Nombre: {name} </li>
            <li> Edad: {age}</li>
            <li> Poderes {powers.join()}</li>
        </ul>
    )
}

export default InformacionSuperHeroe;
