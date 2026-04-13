import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import { Link, Navigate, useNavigate } from 'react-router';

const Login = () => {
    const {register,handleSubmit ,formState:{errors, isSubmitting}} = useForm();
    const {user,loginUser} = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const onsubmit = async(data) =>{
        console.log(data);
        try {
            const response = await loginUser(data);
            if(response.success) navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section>
            {user? (
                <div className='text-4xl text-center font-semibold my-8'>Your are already Logged In</div>
            ):(
                <div className='w-11/12 sm:w-2/3 md:w-1/3 mx-auto my-10 p-8 bg-gray-100 shadow-xl rounded-md'>
                    <h1 className='font-semibold text-4xl my-8 text-center'>Login Page</h1> 
                    <div className='text-lg'>
                        <form action="" onSubmit={handleSubmit(onsubmit)}
                            className='space-y-4'>
                            <div>
                                <label htmlFor="">Email</label>
                                <div>
                                    <input 
                                        {...register('email')}
                                        type="text"
                                        placeholder='Enter your email'
                                        className='p-4 rounded-md border-2 w-full' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <div>
                                    <input 
                                        {...register('password')}
                                        type={`${showPassword? 'text': 'password'}`}
                                        placeholder='Enter your password'
                                        className='p-4 rounded-md border-2 w-full'/>
                                </div>
                            </div>
                            <input 
                                type="checkbox" 
                                onClick={()=> setShowPassword(!showPassword)}/>Show Password
                            <div>
                                <Link 
                                    to={'/password/reset'}
                                    className='text-cyan-800 hover:text-cyan-500'>
                                    Forgot Password? 
                                </Link>
                            </div>
                            <button 
                                disabled={isSubmitting}
                                className='w-full text-xl font-semibold bg-cyan-300 hover:bg-cyan-500 p-4 rounded-md cursor-pointer'>
                                    {isSubmitting? 'Logging In...' : 'Login'}
                                
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Login;