
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
        <div className="itemDetail">
            { cart.map((item) => (
            <div key={item.id}>
            <h3 className="itemDetail_title">{item.nombre}</h3>
            <img className="itemDetail_img" src={`../${item.img}`}/>
            <h2 className="itemDetail_precio">Precio: $ {item.precio}</h2>
            {/* <p>Modelo: {item.modelo} </p>  */}
            <hr/>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsFillTrashFill/></button>
            <hr/>
                </div>
            
            ))}
        

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            <Link className="btn btn-success mx-3" to="/checkout">Finalizar mi compra</Link> 
        </div>
    )
}

export default Cart