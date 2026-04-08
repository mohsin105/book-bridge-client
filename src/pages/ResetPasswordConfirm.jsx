import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import SuccessAlert from '../components/SuccessAlert';
import ErrorAlert from '../components/ErrorAlert';

const ResetPasswordConfirm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {uid} = useParams();
    const {token} = useParams();
    const {resetPasswordConfirm} = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const onSubmit = async(data)=>{
        // console.log(data);
        delete data.confirm_password;
        data = {...data, 'uid':uid, 'token':token};
        // console.log(data);
        try {
            const response = await resetPasswordConfirm(data);
            if(response.success){
                setSuccessMessage(response.message);
                // setInterval(()=> navigate('/login', 8000));
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("Something Went Wrong!!!");
        }
    };
    return (
        <div className='w-11/12 sm:w-1/3 mx-auto my-8'>
            <h1 className='text-2xl font-semibold text-center'>Set New Password</h1>
            <div className='bg-gray-50 p-4 rounded-md shadow-xl'>
                <div>
                    {successMessage && (
                        <SuccessAlert message={successMessage}/>
                    )}
                </div>
                <div>
                    {errorMessage && (
                        <ErrorAlert message={errorMessage}/>
                    )}
                </div>
                <form action="" 
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4' >
                    <div>
                        <label htmlFor="">New Password</label>
                        <div>
                            <input 
                                {...register('new_password')}
                                type={showPassword? "text":"password"}
                                placeholder='Enter new password'
                                className='w-full p-4 rounded-md bg-white' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <div>
                            <input 
                                {...register('confirm_password')}
                                type={showPassword?"text":"password"}
                                placeholder='Enter password again'
                                className='w-full p-4 rounded-md bg-white' />
                        </div>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            onClick={()=> setShowPassword(!showPassword)}
                            className='text-cyan-600'/>Show Password
                    </div>
                    <button
                        type='submit'
                        className='w-full p-4 rounded-md bg-green-400 hover:bg-emerald-600 text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordConfirm;