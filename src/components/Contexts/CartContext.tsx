'use client'
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import CartItem from '@/interfaces/CartItem';

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeItem: (item: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (itemId: number) => {
        const newCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCart);
    };

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
