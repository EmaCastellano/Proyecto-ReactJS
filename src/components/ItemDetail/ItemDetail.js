import Counter from "../ItemCount/ItemCount"
import "./ItemDetail.css";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext";


const ItemDetail = ({item}) => {
    const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            img: item.img,
            categoria: item.categoria,
            cantidad: cantidad,
        }
        
        addToCart(itemToCart)
    }

    return (
        <div className="itemDetail">
    
    <img className="itemDetail_img" src={`../${item.img}`}/>
    
    <div>

    <h3 className="itemDetail_title">{item.nombre}</h3>
    <h2 className="itemDetail_precio">Precio: $ {item.precio}</h2>
    <p className="itemDetail_descripcion">{item.descripcion}</p>
    <br/>
    <p className="itemDetail_categoria">Categoria: {item.categoria}</p>
    <h6 className="itemDetail_stock">Stock disponible: {item.stock}</h6>
    <hr/>
    {/* <small>Modelo: </small>
    <Select options={item.modelo} onSelect={setModelo}/>  */}
    <hr/>
    </div>
        
        {
            isInCart(item.id)
            ?   <Link to="/cart" className="btn btn-success my-2">Finalizar compra</Link>
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