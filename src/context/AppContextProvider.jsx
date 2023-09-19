import { useReducer } from "react";
import AppContext from "./AppContext";

const reducerFunction = (state, action)=>{
    const {value, type} = action;
    switch (type){
        case 'user': 
            return {...state, user: value}
        case 'error':
            return {...state, error: value}
        case 'loading':
            return {...state, isLoading: value}               
        default:
            return {...state}
    }
}
// const INITIAL_STATE = {user: {}, error: null, isLoading: false}

// const AppContext = createContext(INITIAL_STATE);

const AuthContextProvider = (props)=>{
    const [authState, dispatch] = useReducer(reducerFunction, {user: {}, error: null, isLoading: false});

    return <AppContext.Provider value={{authState, dispatch}}>{props.children}</AppContext.Provider>
}

export default AuthContextProvider;