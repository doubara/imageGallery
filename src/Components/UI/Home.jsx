import Nav from "./Navigation/Nav";
import { useRef } from "react";
import ImageGallery from "./ImageGallery.jsx";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Image from "./Image";
import { Link } from "react-router-dom";

const Home = (props)=>{
    const inputRef = useRef();
    const {authState, dispatch} = useContext(AppContext);
    const searchTag = (event)=>{
        event.preventDefault();
        console.log(inputRef.current.value)
        dispatch({type: 'search', payLoad: inputRef.current.value});
    }
    return <div>
        <Nav />
        
        <div className="flex items-center px-8 py-4">
            <h1 className="flex-1 text-2xl text-black">Gallery</h1>
            <form className="flex" onSubmit={searchTag}>
                <div className="ml-auto w-2/3">
                    <input ref={inputRef} className="border w-full border-gray-200 px-4 py-3 " type="text" name="" id="" placeholder="Search Tag"/>
                </div>
            </form>
        </div>
        {!authState.user ? <p className="mx-6 text-red-400 border border-red-200 rounded-lg py-4 px-6"> <Link className="underline" to='/signIn'>Log in</Link> to use the drag and drop functionality</p> : ''}
        {!authState.user ? (
            <div className="customGrid py-3 px-6">
                {authState.displayImages.map((image, index)=>{
                    return <div key={image.id} className="">
                        <Image url={image.url} id={image.id} />
                        <p>{image.tag}</p>
                    </div>
                })}
            </div>
        ) : <ImageGallery />}
        
    </div>
};

export default Home;