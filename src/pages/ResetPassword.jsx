import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import SuccessAlert from '../components/SuccessAlert';

const ResetPassword = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {resetPassword} = useAuthContext();
    const [successMessage, setSuccessMessage] = useState('');
    const onSubmit = async(data)=>{
        console.log(data);
        try {
            const response = await resetPassword(data);
            console.log(response);
            if(response.success){
                setSuccessMessage(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className='w-11/12 sm:w-1/3 mx-auto'>
            <h1 className='text-2xl text-center font-semibold my-8'>Reset Password</h1>
            <div className='bg-violet-50 rounded-md p-4'>
                <h2 className='text-xl font-semibold my-4'>Find Your Account</h2>
                <div>
                    {successMessage && (
                        <SuccessAlert message={successMessage}/>
                    )}
                </div>
                <div className='bg-gray-100'>
                    <form 
                        action="" 
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-4'>
                        <div>
                            <label htmlFor="">Your Email</label>
                            <div>
                                <input 
                                    {...register('email')}
                                    type="text"
                                    placeholder='Enter your email...'
                                    className='w-full p-4 rounded-md bg-white' />
                            </div>
                        </div>
                        <button className='p-4 w-full font-semibold text-lg rounded-md bg-emerald-400 hover:bg-emerald-600'>
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;