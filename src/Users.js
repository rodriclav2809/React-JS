import React, { useState } from 'react'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([{ nombre: 'La Blanca' }, { nombre: 'Bolso' }])

    console.log(usuarios);

    const rodrigo = {nombre:'Rodrigo'};

    const agregarRodrigo = () => {
        setUsuarios([...usuarios,rodrigo]);
    }

    return (
        <>
            <h1>Usuarios</h1>
            <button onClick={agregarRodrigo}>Agregar a Rodrigo</button>
            <ul>
                {usuarios.map((usuario,indice)=>(
                    <h2 key={indice}>{usuario.nombre}</h2>
                ))}
            </ul>
        </>
    )
}

export default Usuarios