import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constants'

export const addToCart = (data) => {
    console.log ("action called", data);
return {
    type: ADD_TO_CART,
    data: data
}
}
export const removeFromCart = (data) => {
    console.log ("item removed from cart", data);
    return{
    type: REMOVE_FROM_CART,
    data: data
    }
}
export const emptyCart = () => {
    console.log ("empty cart");
    return{
    type: EMPTY_CART,
    }
}