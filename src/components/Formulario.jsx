import React, { useState } from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [lista, setLista] = React.useState([]);



    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log('esta vacio fruta')
            return
        }

        if (!descripcion.trim()) {
            console.log('esta vacio descripcion')
            return
        }

        console.log('procesando datos...' + fruta + descripcion)

        setLista([
            ...lista,
            { nombraFruta: fruta, nombreDescripcion: descripcion }
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div className='container mt-5'>
            <h2>formulario</h2>
            <form onSubmit={guardarDatos}>
                <input
                    type="text"
                    placeholder='Ingrese fruta'
                    className='form-control mb-2'
                    onChange={(e) => setFruta(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese descripcion'
                    className='form-control mb-2'
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <ul>
                    {
                        lista.map((item, index) => (
                            <li key={index}>
                                {item.nombraFruta} - {item.nombreDescripcion}
                            </li>
                        ))
                    }
                </ul>
                <button
                    className="btn btn-primary btn-block"
                    type='submit'
                >Agregar</button>


            </form>
        </div>
    )
}

export default Formulario