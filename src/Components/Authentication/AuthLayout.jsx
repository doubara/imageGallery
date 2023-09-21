import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const AuthLayout = (props)=>{
    const {authState, dispatch} = useContext(AppContext);

    return <div className="h-screen grid place-items-center bg-green-100">
        {!authState.user ? <Outlet></Outlet> : <Navigate to='/'/>}
    </div>
};

export default AuthLayout;