import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState([]);

    const addItem = (product, qtyItem = 1) => { 
        const existingProduct = cartState.find((item) => item.id === product.id);
        if (existingProduct) {
            setCartState(
                cartState.map((item) =>
                    item.id === product.id
                        ? { ...item, qtyItem: item.qtyItem + qtyItem }
                        : item
                )
            );
        } else {
            setCartState([...cartState, { ...product, qtyItem }]);
        }
    };

    const updateCartItemQuantity = (id, amount) => {
        setCartState((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, qtyItem: Math.max(1, item.qtyItem + amount) }
                    : item
            )
        );
    };

    const removeItem = (product) => { 
        const existingProduct = cartState.find((item) => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.qtyItem === 1) {
                setCartState(cartState.filter((item) => item.id !== product.id)); 
            } else {
                updateCartItemQuantity(product.id, -1);
            }
        }
    };

    const deleteItem = (product) => {
        setCartState(cartState.filter(item => item.id !== product.id)); 
    };

    const clearCart = () => {
        setCartState([]);
    };

    return (
        <CartContext.Provider value={{ cartState, addItem, removeItem, deleteItem, clearCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
