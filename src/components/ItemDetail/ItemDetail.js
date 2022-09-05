import Contador from "../ItemCount/ItemCount"
import "./ItemDetail.css";




const ItemDetail = ({item}) => {

    return (


        
    <div className="itemDetail">
    <div className="itemDetail_card"></div>
    <img src={`../${item.img}`}/>
    <div>

    <h3 className="itemDetail_title">{item.name}</h3>
    <h2 className="itemDetail_title">$ {item.price}</h2>
    <p className="itemDetail_overview">{item.description}</p>
    <br/>
    <p className="itemDetail_overview">Categoria: {item.category}</p>
    <h6 className="itemDetail_title">Stock disponible: {item.stock}</h6>
    <Contador/>
    </div>
    
</div>
    )
}

export default ItemDetail