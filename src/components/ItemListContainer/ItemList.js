import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="containerProducts">
            
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            
        </div>
    )
}

export default ItemList