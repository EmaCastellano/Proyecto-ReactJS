import '../ItemDetail/ItemDetail.css'

const Counter = ({max, Counter, setCounter, handleAgregar}) => {

    const handleRestar = () => {
        if (Counter > 1) {
            setCounter(Counter - 1)
        }
    }
    
    const handleSumar = () => {
        if (Counter < max ) {
            setCounter(Counter + 1)
        }
    }


    return (
        <div>
            <button 
                className="btn btn-outline-primary"
                onClick={handleRestar}
            >
                -
            </button>

            <span className="mx-3">{Counter}</span>

            <button 
                className="btn btn-primary"
                onClick={handleSumar}
            >
                +
            </button>

            <br/>

            <button onClick={handleAgregar} className="btn-carrito">
            Agregar al carrito
            </button>
        </div>
    )
}

export default Counter