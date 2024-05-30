import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let updatedCart = cart.map(prod =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart(items);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const countProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0)
    }
    const sumPriceProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0)
    }



    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, countProducts, sumPriceProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
