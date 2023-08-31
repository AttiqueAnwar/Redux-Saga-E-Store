import { ADD_TO_CART } from "./constants";

export const cartData = (data = [] , action) =>{
    if (action.type === ADD_TO_CART){
        console.log("Reducer called", action)
        return [action.data, ...data];
    }
    else {
        return data;
    }
}