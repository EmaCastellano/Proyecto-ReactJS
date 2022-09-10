
import { BsFillTrashFill } from 'react-icons/bs'
import { useCartContext } from '../Context/CartContext'

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div className="itemDetail">
            { cart.map((item) => (
                <div>
                <img className="itemDetail_img" src={`../${item.img}`}/>
                    <h3>{item.name}</h3>
                    <p>Precio: $ {item.price}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Modelo: {item.modelo}</small>
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