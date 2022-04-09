import React from 'react'

const Formulario = () => {

    const [fruta,setFruta]=React.useState('');
    const [descripcion,setDescripcion]=React.useState('');

  return (
    <div className='container mt-5'>
        <h2>formulario</h2>
        <form>
            <input 
            type="text" 
            placeholder='Ingrese fruta'
            className='form-control mb-2'
            onChange={(e) => setFruta(e.target.value) }
            />
             <input 
            type="text" 
            placeholder='Ingrese descripcion'
            className='form-control mb-2'
            onChange={(e) => setDescripcion(e.target.value) }
            />
            <button className="btn btn-primary btn-block">Agregar</button>
        </form>
    </div>
  )
}

export default Formulario