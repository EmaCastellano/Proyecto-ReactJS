import "./Cart.css";
import { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
                <div className="itemDetail">
                <h2>A tu carrito le faltan cositas</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="itemCart">
            { cart.map((item) => (
            <div key={item.id}>
            <h3 className="itemCart_text">{item.nombre}</h3>
            <img className="itemDetail_img" src={`../${item.img}`}/>
            <h2 className="itemCart_text">Precio: $ {item.precio}</h2>
            <h4 className="itemCart_text">Cantidad: {item.cantidad}</h4>
            <hr/>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
            <hr/>
                </div>
            
            ))}
        

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn-checkout">Vaciar carrito</button>
            <Link className="btn-checkout" to="/checkout">Finalizar compra</Link> 
        </div>
    )
}

export default Cart