import { Link } from 'react-router-dom'



const Item = ( {producto} ) => {

    return (
        <div>
            <img className="itemDetail_img" src={`../${producto.img}`}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: $ {producto.precio}</p>
            
            <Link to={`/item/${producto.id}`} className="btn-detail">Ver más detalles</Link>
        </div>
    )
}

export default Item
