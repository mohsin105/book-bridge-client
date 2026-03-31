import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register,handleSubmit ,formState:{errors, isSubmitting}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onsubmit = (data) =>{
        console.log(data);
    }
    return (
        <section>
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
                        <button 
                            className='w-full text-lg font-semibold bg-cyan-300 hover:bg-cyan-500 p-4 rounded-md'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;