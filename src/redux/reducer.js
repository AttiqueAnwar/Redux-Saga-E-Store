import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [] , action) =>{
    // if (action.type === ADD_TO_CART){
    //     console.log("Reducer called", action)
    //     return data;
    // }
    // else {
    //     return "No action called";
    // }

    switch(action.type){
        case ADD_TO_CART:
            console.log("Reducer add called", action)
        return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.log("Reducer removed called", action)
            data.length = data.length?data.length-1:[]
        return [ ...data];
        case EMPTY_CART:
            console.log("Reducer empty called", action)
            data= []
        return [];
        default:
            return data; 

    }
}