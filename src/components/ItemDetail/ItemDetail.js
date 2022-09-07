import Contador from "../ItemCount/ItemCount"
import "./ItemDetail.css";




const ItemDetail = ({item}) => {

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
    <Contador/>
    </div>
    
</div>
    )
}

export default ItemDetail