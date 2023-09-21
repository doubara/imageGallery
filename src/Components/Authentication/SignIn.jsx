import { auth } from '../../Firebase/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
// import {fcGoogle} from 'react-icons/fc';
import { Circles } from 'react-loader-spinner';
import Loader from '../Loader';



const SignIn = (props)=>{
    const {authState, dispatch} = useContext(AppContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const signInUser = (event)=>{
        event.preventDefault();

        dispatch({type: 'loading', payLoad: true})

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((response)=>{
            console.log(response.user);
            dispatch({type: 'user', payLoad: response.user});
            dispatch({type: 'loading', payLoad: false})
            console.log(authState);
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
            dispatch({type: 'error', payLoad: error});
            dispatch({type: 'loading', payLoad: false})
        })
    };

    return <div className='bg-white rounded-lg py-8 px-8 w-96'>
        <h2 className='text-center text-lg'>Sign in with</h2>
        {/* <button>{<fcGoogle />}</button> */}
        
        <form onSubmit={signInUser} className=''>
            <div className='my-4'>
                <label className='block my-2 text-lg' htmlFor="email">Email</label>
                <input className='border border-gray-100 px-4 py-3 rounded-lg w-full' type="email" ref={emailRef} placeholder='example@example.com' />
            </div>
            <div className='my-4'>
                <label className='block my-2 text-lg' htmlFor="password">Password</label>
                <input className='border border-gray-100 px-4 py-3 rounded-lg w-full' type="password" ref={passwordRef} placeholder='1password' />
            </div>
            <button className='px-2 py-3 bg-green-600 rounded-lg text-white inline-block my-4 w-full' type='submit'>Log in</button>
        </form>
        <p className='text-md'>Don't have an account? <Link className='text-green-600' to='/signup'>Sign up</Link></p>
        {authState?.error?.code === 'auth/invalid-login-credentials' && <p className='text-center text-red-400 my-3'>Incorrect Email or Password</p> }
        {authState.isLoading && <Loader />}
    </div>
};
export default SignIn;