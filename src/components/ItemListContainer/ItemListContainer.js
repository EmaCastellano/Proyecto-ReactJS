import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer





// import React, { useEffect, useState } from 'react'
// import { Spinner } from 'reactstrap';
// import ItemCard from '../Item/Item';

// const products = [
//     {
//         id: 1,
//         name: "Disco SSD",
//         description: "Buena capacidad y fluidez.",
//         img: "./assets/disco-ssd.jpg",
//         price: "5000",
//         stock: 5,
//         category: "Discos SSD",
//     },
//     {
//         id: 2,
//         name: "Memoria RAM",
//         description: "DDR4",
//         img: "./assets/memoria-ram.jpg",
//         price: "7500",
//         stock: 10,
//         category: "Memorias RAM",
//     },
//     {
//         id: 3,
//         name: "Mouse Inalambrico",
//         description: "Lo que necesitas para tu estacion de trabajo.",
//         img: "/assets/mouse-inalambrico.jpg",
//         price: "2500",
//         stock: 20,
//         category: "Mouses"
//     },
//     {
//         id: 4,
//         name: "Teclado Mecanico",
//         description: "Simplemente excelente",
//         img: "/assets/teclado-mecanico.jpg",
//         price: "3500",
//         stock: 7,
//         category: "Teclados"
//     },
    
// ]

// const ItemListContainer = () => {

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const getData = () => {
//         const error = false;
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(!error) {
//                     resolve(products)
//                 }else{
//                     reject("Hubo un error")
//                 }
//             }, 5000)
//         }
            
//         )
//     }

//     useEffect(() => {
//         getData()
//         .then(res => {
//             setData(res);
//             setLoading(false);
//         })
//         .catch(error => {
//             setLoading(false);
//             console.log(error)
//         })
//     }, [])

//     return (
//         <>
        
//         {
//             loading? 
//                 <Spinner
//                     color="primary"
//                     type="grow"
//                 ></Spinner>
//                 :
//                 <div className="row">
            
//                     {
//                         data.map((product) => (
//                             <div className="col-4" key={product.id}>
//                                 <ItemCard nombre={product.name} descripcion={product.description} img={product.img} precio={product.price} stock={product.stock}/>
//                             </div>
//                         ))
//                     }
//                 </div>
//         }
        
//         </>
        


        
//     )
// }

// export default ItemListContainer