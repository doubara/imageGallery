import { Link } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import AppContext from "../../../context/AppContext";
import { auth } from "../../../Firebase/Firebase";
import Loader from "../../Loader";

const Nav = (props)=>{

    const {authState, dispatch} = useContext(AppContext);
    console.log(authState.user)
    const signOutUser = async ()=>{
        signOut(auth)
        .then(()=>{
            dispatch({type: 'user', payLoad: null});
            dispatch({type: 'loading', payLoad: false});
            dispatch({type: 'error', payLoad: null});
        })
        .catch((error)=>{
            dispatch({type: 'error', payLoad: error});
        })
    }

    return <nav className="flex px-6 py-6 text-black">
        <div className="flex-1"><span className="text-xl font-bold align-middle">Photo Gallery</span></div>
        <div className="flex-1 items-end">
            {!authState.user ? (
                <div className="flex">
                <Link className="ml-auto px-2 py-2 bg-green-400 text-white inline-block mr-4 rounded-lg" to='/signup'>Sign up</Link>
                <Link className="px-2 py-2 border border-gray-200 text-black inline-block rounded-lg" to='/signin'>Log in</Link>
            </div>
            ) : (
                <div className="flex items-center">
                    <span className="ml-auto text-lg text-black font-bold px-3">Welcome</span>
                    <button onClick={signOutUser} className="px-2 py-2 bg-red-500 border border-gray-200 text-white inline-block rounded-lg">Log Out</button></div>
                
            )}
        </div>
        {authState.isLoading && <Loader />}
    </nav>
};

export default Nav;