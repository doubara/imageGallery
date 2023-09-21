
import { useRef, useContext } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import AppContext from '../../context/AppContext';
import Loader from '../Loader';



const SignUp = (props)=>{
    const emailRef = useRef();
    const passwordRef = useRef();

    // initialize useNavigate
    const navigate = useNavigate();

    const {authState, dispatch} = useContext(AppContext);

    const signUpUser = (event) =>{
        event.preventDefault();
        dispatch({type: 'loading', payLoad: true});

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((response)=>{
            console.log(response.user);
            dispatch({type: 'user', payLoad: response.user});
            dispatch({type: 'loading', payLoad: false});
            dispatch({type: 'error', payLoad: null});
            navigate('/')

        })
        .catch((error)=>{
            console.log(error);
            dispatch({type: 'error', payLoad: error})
            dispatch({type: 'loading', payLoad: false});
        })
        
        
    };

    return <div className='bg-white rounded-lg py-8 px-8 w-96'>
        <h2 className='text-center text-lg'>Create an Account</h2>
        <form onSubmit={signUpUser} className=''>
            <div className='my-4'>
                <label className='block my-2 text-lg' htmlFor="email">Email</label>
                <input className='border border-gray-100 px-4 py-3 rounded-lg w-full' type="email" ref={emailRef} placeholder='example@example.com' />
            </div>
            <div className='my-4'>
                <label className='block my-2 text-lg' htmlFor="password">Password</label>
                <input className='border border-gray-100 px-4 py-3 rounded-lg w-full' type="text" ref={passwordRef} placeholder='1password' />
            </div>
            <button className='px-2 py-3 bg-green-600 rounded-lg text-white inline-block my-4 w-full' type='submit'>Submit</button>
        </form>
        {authState.isLoading && < Loader/>}
        
    </div>
};
export default SignUp;
