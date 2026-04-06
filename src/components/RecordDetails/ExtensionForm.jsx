import React from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';

const ExtensionForm = ({setExtensionForm}) => {
    const {register, handleSubmit, formState:{errors,}} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
        try {
            const response = authApiClient.post(``);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea 
                        {...register('message')}
                        type='textarea'
                        placeholder='Explain Your Reasons...'
                        className='textarea w-full p-4 rounded-md bg-stone-100'></textarea>
                </div>
                <p className='my-2 text-lg bg-cyan-50 p-2'>Request For 7 days Extension</p>
                <div className='text-lg font-semibold space-x-4'>
                    <button 
                        type='submit'
                        className='p-4 rounded-md bg-violet-400 hover:bg-violet-500'>
                        Confirm
                    </button>
                    <button 
                        onClick={()=>setExtensionForm(false)}
                        className='p-4 rounded-md bg-rose-400 hover:bg-rose-600 '>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExtensionForm;