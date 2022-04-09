import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentar = () => {
        setContador(contador + 1)
    }
    const decrementar = () =>{
        setContador(contador-1)
    }
    return (
        <div>
            <center>
                Contador
                <br />
                <button onClick={()=>aumentar()}>Aumentar</button> <button onClick={()=>decrementar()}>Decrementar</button>
                <h1>Contador aumentado {contador}</h1>
                <h5>{
                    contador > 11 ? 'Es mayor a 11' : 'es menor o igual que 11'
                    }</h5>
            </center>

        </div>

    )
}

export default Contador