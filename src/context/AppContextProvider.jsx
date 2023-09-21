import { useReducer } from "react";
import AppContext from "./AppContext";
import ImagesArray  from "../Utils/Images";

const reducerFunction = (state, action)=>{
    const {payLoad, type} = action;
    let newArray = [];
    console.log(state.updatedArray);
    switch (type){
        case 'user': 
            return {...state, user: payLoad, isLoggedIn: true, error: null}
        case 'error':
            return {...state, error: payLoad}
        case 'loading':
            return {...state, isLoading: payLoad}
        case 'search':
            newArray = ImagesArray.filter((image)=>image.tag.includes(payLoad));
            return {...state, search: payLoad, displayImages: newArray};
        case 'drag':
            return {...state, displayImages: payLoad};
        case 'log-out':
            return {...state, user: null, error: null}
        default:
            return {...state}
    }
}

const AppContextProvider = (props)=>{
    const [authState, dispatch] = useReducer(reducerFunction, {user: null, error: null, isLoading: false, displayImages: ImagesArray, search: ''});

    return <AppContext.Provider value={{authState, dispatch}}>{props.children}</AppContext.Provider>
}

export default AppContextProvider;