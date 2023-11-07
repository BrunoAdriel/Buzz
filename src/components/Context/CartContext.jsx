import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]); 

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ({ items: [], total: 0})

    const addToCart = (product) => {
        setCart((prevCart) => ({
            ...prevCart,
            items: [...prevCart.items, product],
            total: prevCart.total + product.price
        }))
    }

    const eliminarCarrito = (productId) => {
        setCart((prevCart) => {
            const eliminarItem = prevCart.items.filter((item) => item.id !== productId);
            const eliminarPrecio = eliminarItem.reduce((total, item) => total + item.price, 0);
            return {
                ...prevCart,
                items: eliminarItem,
                total: eliminarPrecio,
            };
        });
    };


    return(
        <CartContext.Provider value ={{cart, addToCart, eliminarCarrito}} >
            {children}
        </CartContext.Provider>
    )


}

export default CartProvider;