import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router';
import FieldErrorAlert from '../components/FieldErrorAlert';
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

const Registration = () => {
    const {register, handleSubmit,watch ,formState:{errors,isSubmitting}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {user, registerUser, errorMessage} = useAuthContext();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const onSubmit = async(data) =>{
        delete data.confirm_password;
        console.log(data);
        try {
            const response = await registerUser(data);
            console.log(response);
            if(response.success) {
                setSuccessMessage(response.message);
                setTimeout(() => navigate('/login', 5000));
                // navigate('/login');
            };
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
                {errorMessage && <ErrorAlert message={errorMessage}/>}
                {successMessage && <SuccessAlert message={successMessage}/>}
                <div>
                    <form 
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-4 text-base'>
                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <input 
                                    {...register('email',{
                                        required:"Email is required"
                                    })}
                                    type="email"
                                    placeholder='Email'
                                    className='w-full p-4 border rounded-md' />
                                {errors.email && (<FieldErrorAlert message={errors.email.message}/>)}
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
                                    {...register('password',{
                                        required:"Password is Required",
                                        minLength:{
                                            value:8,
                                            message:"Password must be 8 characters long",
                                        }
                                    })}
                                    type={`${showPassword? 'text' : "password"}`}
                                    placeholder='Password'
                                    className='w-full p-4 border rounded-md' />
                                {errors.password && (<FieldErrorAlert message={errors.password.message}/>)}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label>
                            <div>
                                <input 
                                    {...register('confirm_password',{
                                        required:"Confirm Password is Required",
                                        validate:(value) => value === watch("password") || "Password do not match"
                                    })}
                                    type={`${showPassword? 'text' : "password"}`}
                                    placeholder='Confirm Password'
                                    className='w-full p-4 border rounded-md' />
                                {errors.confirm_password && (<FieldErrorAlert message={errors.confirm_password.message}/>)}
                            </div>
                        </div>
                        <input 
                            type="checkbox" 
                            onClick={()=> setShowPassword(!showPassword)}/>Show Password
                        <button 
                            disabled={isSubmitting}
                            className='w-full text-lg font-semibold rounded-md p-4 bg-emerald-400 hover:bg-emerald-600 '>
                                {isSubmitting? 'Signing Up....' : 'Sign Up'}
                        </button>
                        <div>
                            Already Have an account? 
                            <Link to={'/login'} className='text-indigo-800 font-semibold ml-2'>
                                 Login Here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Registration;