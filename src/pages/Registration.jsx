import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';

const Registration = () => {
    const {register, handleSubmit, formState:{errors,}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {user, registerUser} = useAuthContext();
    const navigate = useNavigate()
    const onSubmit = async(data) =>{
        console.log(data);
        try {
            const response = await registerUser(data);
            console.log(response);
            if(response) navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section>
            <div className='w-11/12 sm:w-2/3 md:w-1/3 mx-auto my-10 p-8 rounded-md bg-gray-50 shadow-xl'>
                <h1 className='text-4xl font-semibold my-8 text-center'>
                    Registration Page
                </h1>
                <div>
                    <form 
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-4 text-base'>
                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <input 
                                    {...register('email',)}
                                    type="text"
                                    placeholder='Email'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">First name</label>
                            <div>
                                <input 
                                    {...register('first_name',)}
                                    type="text"
                                    placeholder='First name'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Last Name</label>
                            <div>
                                <input 
                                    {...register('last_name',)}
                                    type="text"
                                    placeholder='Last Name'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <div>
                                <input 
                                    {...register('phone_number',)}
                                    type="text"
                                    placeholder='Phone Number'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <div>
                                <input 
                                    {...register('address',)}
                                    type="text"
                                    placeholder='Address'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div>
                                <input 
                                    {...register('password',)}
                                    type={`${showPassword? 'text' : "password"}`}
                                    placeholder='Password'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label>
                            <div>
                                <input 
                                    {...register('confirm_password',)}
                                    type={`${showPassword? 'text' : "password"}`}
                                    placeholder='Confirm Password'
                                    className='w-full p-4 border rounded-md' />
                            </div>
                        </div>
                        <input 
                            type="checkbox" 
                            onClick={()=> setShowPassword(!showPassword)}/>Show Password
                        <button 
                            className='w-full text-lg font-semibold rounded-md p-4 bg-emerald-400 hover:bg-emerald-600 '>
                                Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Registration;