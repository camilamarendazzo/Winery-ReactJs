import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
import type { Wine, CartItem } from '../types/types'

export function useCart() {
    
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item : Wine){
        const itemExists = cart.findIndex( currentItem => currentItem.id === item.id)

        if(itemExists === -1){
            const newItem : CartItem = {...item, quantity: 1}
            setCart([...cart, newItem])
        } else {
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        }
    }

    function removeFromCart(id : CartItem['id']){
        setCart( prevCart => prevCart.filter(wine => wine.id !== id))
    }

    function incrementQuantity(id : CartItem['id']){
        const updatedCart = cart.map(item => {
            if(item.id === id){
                item.quantity++
            }
            return item
        })
        setCart(updatedCart)
    }

    function decrementQuantity(id : CartItem['id']){
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity > 1){
                item.quantity--
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart () {
        setCart([])
    }

    const isEmpty = useMemo (() => cart.length === 0, [cart]) 
    const totalPrice = useMemo (() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        isEmpty,
        totalPrice
    }
}