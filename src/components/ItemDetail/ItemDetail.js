

const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <h4>{item.price}</h4>
        </div>
    )
}

export default ItemDetail