import React from 'react'
import { Button, Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import Contador from '../ItemCount/ItemCount';

const ItemCard = (props) => {

    const {nombre, descripcion, img, precio, stock} = props;

    const addToCart = (count) => {
        console.log("Se añadió al carrito", count, nombre, precio*count)
    }
    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <img src={img} style={{height: "15rem", objectFit: "cover",}}/>
                <CardBody>
                    <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardText>
                        {descripcion}
                    </CardText>
                    <Contador stock={stock} addToCart={addToCart}/>
                </CardBody>
                <CardFooter>
                    $ {precio}
                    <hr/>
                    Stock {stock}
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemCard