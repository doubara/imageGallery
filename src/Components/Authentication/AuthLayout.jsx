import { Outlet } from "react-router-dom";
import SignIn from "./SignIn";

const AuthLayout = (props)=>{

    return <div className="h-screen grid place-items-center bg-green-100">
        <Outlet></Outlet>
    </div>
};

export default AuthLayout;