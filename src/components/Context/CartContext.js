import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {


  const [cart, setCart] = useState(init)


  const addToCart = (item) => {
      setCart([...cart, item])
    }
    
    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Esta acción es irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro',
            cancelButtonText: 'No, mejor no',
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const finalizarCompra = (id) => {
      Swal.fire({
        title: 'Compra exitosa!',
        text: 'Felicitaciones! Pronto te contactaremos por el email que registraste al momento de finalizar la compra. Muchas gracias por elegirnos',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Genial!'
      })
      setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            finalizarCompra
          }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}