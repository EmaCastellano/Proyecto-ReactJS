import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import ItemCard from '../Item/Item';

const products = [
    {
        id: 1,
        name: "Disco SSD",
        description: "Buena capacidad y fluidez.",
        img: "./assets/disco-ssd.jpg",
        price: "5000",
        stock: 5,
        rate: 5
    },
    {
        id: 2,
        name: "Memoria RAM",
        description: "DDR4",
        img: "./assets/memoria-ram.jpg",
        price: "7500",
        stock: 10,
        rate: 5
    },
    {
        id: 3,
        name: "Mouse Inalambrico",
        description: "Lo que necesitas para tu estacion de trabajo.",
        img: "/assets/mouse-inalambrico.jpg",
        price: "2500",
        stock: 20,
        rate: 5
    },
    {
        id: 4,
        name: "Teclado Mecanico",
        description: "Simplemente excelente",
        img: "/assets/teclado-mecanico.jpg",
        price: "3500",
        stock: 7,
        rate: 5
    },
    
]

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        const error = false;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!error) {
                    resolve(products)
                }else{
                    reject("Hubo un error")
                }
            }, 5000)
        }
            
        )
    }

    useEffect(() => {
        getData()
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
    }, [])

    return (
        <>
        
        {
            loading? 
                <Spinner
                    color="primary"
                    type="grow"
                ></Spinner>
                :
                <div className="row">
            
                    {
                        data.map((product) => (
                            <div className="col-4" key={product.id}>
                                <ItemCard nombre={product.name} descripcion={product.description} img={product.img} precio={product.price} stock={product.stock}/>
                            </div>
                        ))
                    }
                </div>
        }
        
        </>
        


        
    )
}

export default ItemListContainer