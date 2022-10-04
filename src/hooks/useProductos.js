import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useProductos = () => {
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
                

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoriaId])

    return ({
        productos, loading
    })
}
