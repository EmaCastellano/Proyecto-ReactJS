import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"
import Loader from "../Loader/Loader"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoriaId 
                    ? query(productosRef, where('categoria', '==', categoriaId) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoriaId])


    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
