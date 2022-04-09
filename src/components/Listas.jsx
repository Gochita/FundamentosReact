import React, { useState } from 'react'

const Listas = () => {
    // const estadoInicial= [1,2,3,4,5,6]
    const agregarElemento = () => {
        setLista([
            ...lista, ...array2,...array1
        ])
    }
    const estadoInicial = [
        { id: 1, texto: 'tarea1' },
        { id: 2, texto: 'tarea2' },
        { id: 3, texto: 'tarea3' },
        { id: 4, texto: 'tarea4' }
    ]
    const array1 = [{
        id: 8, texto: 'under my control'
    }]
    const array2 = [
        { id: 5, texto: 'tarea5' },
        { id: 6, texto: 'tarea6' },
        { id: 7, texto: 'tarea7' }
    ]
    const [lista, setLista] = useState(estadoInicial)

    return (
        <div>
            <h2>Listas</h2>
            {

                lista.map((item, index) => (
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick={() => agregarElemento()}>Agregar</button>
        </div>
    )
}

export default Listas