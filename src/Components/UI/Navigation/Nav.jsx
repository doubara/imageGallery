import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Nav = (props)=>{

    const {authState, dispatch} = useContext(AppContext);

    return <nav className="flex px-6 py-6 text-black">
        <div className="flex-1"><span className="text-xl font-bold align-middle">Photo Gallery</span></div>
        <div className="flex-1 items-end">
            {!authState ? (
                <div className="flex">
                <Link className="ml-auto px-2 py-2 bg-green-400 text-white inline-block mr-4 rounded-lg" to='/signin'>Sign up</Link>
                <Link className="px-2 py-2 border border-gray-200 text-black inline-block rounded-lg" to='/signup'>Sign in</Link>
            </div>
            ) : (
                <div className="flex">
                <img className="w-8 h-8 ml-auto rounded-full" src="" alt="" />
                <span>{}</span>
            </div>
            )}
        </div>
    </nav>
};

export default Nav;