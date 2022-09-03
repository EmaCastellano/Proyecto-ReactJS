import { Link } from 'react-router-dom'



const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.img}/>
            <h4>{producto.name}</h4>
            <p>Precio: $ {producto.price}</p>
            <p>{producto.description}</p>
            
            <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más detalles</Link>
        </div>
    )
}

export default Item
