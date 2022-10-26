(function () {
    console.log('iniciando')
})()

function getPersona() {
    let nombre = 'pedro';

    function setNombre(param) {
        nombre = param
    }

    function getNombre() {
        return nombre;
    }

    return {
        setNombre,
        getNombre
    }
}

function withCb(nombre, callback) {
    console.log('es valido', callback(nombre))
}

let persona = getPersona()
console.log(persona.getNombre())
console.log(persona.setNombre('Raul'))
console.log(persona.getNombre())
console.log(persona)
withCb(persona.getNombre(), validator);

function validator(nombre) {
    return nombre === 'pablo'
}
