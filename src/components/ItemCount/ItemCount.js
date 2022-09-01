import { useState } from "react"
import { Icon } from '@iconify/react';

const Contador = () => {

    const [counter, setCounter] = useState(1)

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }


    return (
        <div className="container my-5">
            
            <h4>Elegí la cantidad de productos que deseas solicitar</h4>
            <hr/>
            

            <button onClick={handleRestar} className="btn btn-outline-danger">-</button>
            <span className="mx-4">{counter}</span>
            <button onClick={handleSumar} className="btn btn-success">+</button>
            <hr/>
            <button className="btn btn-dark">Agregar al Carrito </button>
            <Icon icon="entypo:shopping-cart" color="black" width="50" height="50" />
        </div>
    )
}


export default Contador;