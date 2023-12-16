import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, Name: action.Name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
        // break;
        case "REMOVE":
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case "UPDATE":
            let arr = [...state];
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
        case "DROP":
            let empArr = [];
            return empArr;
        default:
            console.log("Error in reducer");
    }
}
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartStateContext.Provider value={state}>

            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);