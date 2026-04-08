import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
import SuccessAlert from '../SuccessAlert';
import ErrorAlert from '../ErrorAlert';

const ActivateAccount = () => {
    const {uid} = useParams();
    const {token} = useParams();
    const {activateAccount} = useAuthContext();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    useEffect(()=>{
        callActivateAccount();
    },[]);
    const callActivateAccount = async()=>{
        const data={
            'uid':uid,
            'token':token
        };
        try {
            const response = await activateAccount(data);
            console.log(response);
            if(response.success){
                setSuccessMessage(response.message);
                setTimeout(()=> navigate('/login', 5000));
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Something Went Wrong. Please check your activation link')
        }
    };
    return (
        <div className='w-11/12 sm:w-1/3 mx-auto'>
            <h1 className='text-2xl text-center font-semibold'>Activate Account</h1>
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
        </div>
    );
};

export default ActivateAccount;