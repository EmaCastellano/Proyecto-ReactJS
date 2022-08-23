

export const Contenedor = ( {cliente = "John Doe", asesor = "Emanuel Castellano", ej = []} ) => {
    return (
    <div className="my-container">
        <h4>Hola {cliente}</h4>
        <br/>
        <p>Tu asesor será: {asesor}</p>
        </div>
        )
    }