import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'


const Item = ( {producto} ) => {

    return (
        <div>
            <img className="itemDetail_img" src={`../${producto.img}`}/>
            <h4>{producto.nombre}</h4>
            <p className='precio'><strong>Precio: $ {producto.precio} </strong> </p>       
            <Link to={`/item/${producto.id}`} className="btn-detail">Ver más detalles</Link>

            <hr></hr>
        </div>
    )
}

export default Item
