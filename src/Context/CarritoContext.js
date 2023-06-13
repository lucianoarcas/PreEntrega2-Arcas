
import { useState, createContext } from "react";


export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);


     const addItem = (item, cantidad) => {

        const productoExistente = cart.find(prod => prod.item.id === item.id);

        if (!productoExistente) {

            setCart(prev => [...prev, { item, cantidad }]);
        } else {
            const carritoActualizado = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });

            setCart(carritoActualizado);
        }
    }


    const removeItem = (id) => {
        const carritoActualizado = cart.filter(prod => prod.item.id !== id);
        setCart(carritoActualizado);
    }

    const clearCart = () => {
        setCart([]);
    }


    return (
        <CarritoContext.Provider value={{ cart, addItem, removeItem, clearCart }} >
            {children}
        </CarritoContext.Provider>

    )


}