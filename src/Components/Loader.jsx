import { Circles } from "react-loader-spinner";

const Loader = (props) =>{
    return <div className="absolute top-0 left-0 min-h-screen min-w-full grid place-items-center">
        <Circles
        height="80"
        width="80"
        color="#4fa94b"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} />
    </div>
}

export default Loader;