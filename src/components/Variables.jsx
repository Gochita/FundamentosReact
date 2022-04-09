import React from 'react'

const Variables = () => {
    const saludo= ' hola desde constante';
    const imagen= 'https://i.pinimg.com/564x/cc/8c/33/cc8c331191fd308f92b20aec09b370bb.jpg'
  return (
    <div>
        
        <h2>nuevo componente{saludo}</h2>
         <img src={imagen} alt="" /> 
    </div>
  )
}

export default Variables