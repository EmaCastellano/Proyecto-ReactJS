import Counter from "../ItemCount/ItemCount"
import "./ItemDetail.css";
import Select from "../Select/Select"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext";


const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
    const [modelo, setModelo] = useState(item.modelo[0].value)
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.price,
            nombre: item.name,
            modelo: modelo,
            cantidad: cantidad,
        }
        
        addToCart(itemToCart)
    }

    return (
        <div className="itemDetail">
    
    <img className="itemDetail_img" src={`../${item.img}`}/>
    
    <div>

    <h3 className="itemDetail_title">{item.name}</h3>
    <h2 className="itemDetail_precio">$ {item.price}</h2>
    <p className="itemDetail_descripcion">{item.description}</p>
    <br/>
    <p className="itemDetail_categoria">Categoria: {item.category}</p>
    <h6 className="itemDetail_stock">Stock disponible: {item.stock}</h6>
    <hr/>
    <small>Modelo: </small>
    <Select options={item.modelo} onSelect={setModelo}/> 
    <hr/>
    </div>
        
        {
            isInCart(item.id)
            ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
            :   <Counter 
                    max={item.stock}
                    Counter={cantidad}
                    setCounter={setCantidad}
                    handleAgregar={handleAgregar}
                />
        
        }</div>
    )
}


export default ItemDetail