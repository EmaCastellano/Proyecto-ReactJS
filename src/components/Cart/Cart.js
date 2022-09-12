
import { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    return (
        <div className="itemDetail">
            { cart.map((item) => (
            <div key={item.id}>
            <h3 className="itemDetail_title">{item.nombre}</h3>
            <img className="itemDetail_img" src={`../${item.img}`}/>
            <h2 className="itemDetail_precio">Precio: $ {item.precio}</h2>
            <p className="itemDetail_categoria">Categoria: {item.categoria}</p>
            <p>Modelo: {item.modelo} </p> 
            <hr/>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsFillTrashFill/></button>
            <hr/>
                </div>
            
            ))}
        

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export default Cart