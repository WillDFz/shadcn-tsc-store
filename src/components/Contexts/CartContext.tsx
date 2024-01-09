'use client'
import React, { createContext, useState, ReactNode, useEffect, use } from 'react';
import CartItem from '@/interfaces/CartItem';
import { useToast } from '../ui/use-toast';

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeItem: (item: number) => void;
    addToCartToast: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const { toast } = useToast()

    const addToCartToast = () => {
        toast({
            title: "Produto adicionado ao carrinho.",
        })
    }

    const addToCart = (item: CartItem) => {
        const existItem = cartItems.findIndex((cartItem) => cartItem.id === item.id)
        if (existItem !== -1) {
            const newCart = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }
                return cartItem
            })
            setCartItems(newCart);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        addToCartToast()
    };

    const removeItem = (itemId: number) => {
        const newCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCart);
    };

    const updateCartTotal = (cartItems: CartItem[]) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        console.log("total", total)
        return total;
    }

    useEffect(() => {
        updateCartTotal(cartItems)
    }, [cartItems])



    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, addToCartToast }}>
            {children}
        </CartContext.Provider>
    );
};
