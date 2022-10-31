
const Link = (props) => {
    return (
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.mensaje}
        </a>
    )
}

export default Link;