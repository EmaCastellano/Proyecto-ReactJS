import Contador from "../ItemCount/ItemCount"




const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={`../${item.img}`}/>
            <h3>{item.name}</h3>
            <h4>$ {item.price}</h4>
            <small>Stock disponible: {item.stock}</small>
            <p>{item.description}</p>
            <p>Categoria: {item.category}</p>
            <Contador/>
        </div>
    )
}

export default ItemDetail