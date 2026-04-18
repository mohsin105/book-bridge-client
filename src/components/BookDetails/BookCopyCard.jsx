import React, { useState } from 'react';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';
import SuccessAlert from '../SuccessAlert';
import useAuthContext from '../../hooks/useAuthContext';
import ErrorAlert from '../ErrorAlert';

const BookCopyCard = ({copy,setUpdateForm,setCopyUpdateObj}) => {
    const [requestForm, setRequestForm] = useState(false);
    const {register, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful}} = useForm();
    const [requestSuccessMessage, setRequestSuccessMessage]  = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const {user} = useAuthContext();
    const onSubmit = async(data) =>{
        // console.log(data);
        const requestData = {...data,'book_copy':copy.id};
        // console.log(requestData);
        try {
            const response = await authApiClient.post(`borrow/requests/`,requestData);
            console.log(response);
            if (response.status==201){
                setRequestSuccessMessage("Request Successful!!!");
            }
        } catch (error) {
            // console.log(error.response.data.detail);
            setErrorMessage(error.response.data.detail);
        }finally{
            setRequestForm(false);
        }
    };
    return (
        <div className='border rounded-md p-4 bg-gray-100/50 space-y-4'>
            {requestSuccessMessage && (
                <div className='my-2'>
                    <SuccessAlert message={requestSuccessMessage} />
                </div>
            )}
            {errorMessage && (
                <div className='my-2'>
                    <ErrorAlert message={errorMessage}/>
                </div>
            )}
            <h5 className='text-lg'>
                <span className='font-semibold'>Owner:</span>  
                {copy.owner.first_name} {copy.owner.last_name}
            </h5>
            <div className='flex justify-between'>
                <p className='p-1 rounded-lg bg-emerald-200/80'>
                    {copy.availability_status_display}
                </p>
                <p className='p-1 rounded-lg bg-violet-200'>
                    <span className='font-semibold'>Condition: </span>
                    {copy.book_condition_display}
                </p>
            </div>
            <p>
                <span className='font-semibold'>Owner Note: </span> 
                {copy.note}
            </p>
            {/* Buttons - 'Update' for owner , 'Request' for others */}
            <div className='font-semibold mt-4'>
                {user && user.id ===copy.owner.id? (
                    <button 
                        onClick={()=>{
                            setUpdateForm(true);
                            setCopyUpdateObj(copy);
                        }}
                        className='p-2 w-full rounded-md bg-violet-400 hover:bg-violet-300'>
                        Update
                    </button>
                ) :(
                    <div onClick={()=>setRequestForm(true)}>
                        <button
                            disabled={isSubmitting || isSubmitSuccessful} 
                            className='p-2 w-full rounded-md text-lg font-semibold bg-violet-400 hover:bg-violet-300'>
                            {copy.availability_status === 'BORROWED'? 'Reserve' : isSubmitSuccessful? 'Requested' : 'Request to Borrow'}
                        </button>
                    </div>
                )}
            </div>
            {/* Copy-request Form- Rendered when user clicks on 'Request' Button */}
            {requestForm && (
                <div className='my-2 bg-gray-100 rounded-md'>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-2'>
                            <textarea 
                                {...register('message')}
                                type="textarea"
                                rows={5}
                                placeholder='Send a note with the request'
                                className='p-2 w-full bg-white rounded-md '></textarea>
                        </div>
                        <Button action={'create'} children={isSubmitting? 'Sending..' : 'Confirm Request' }/>
                        <button
                            onClick={()=> setRequestForm(false)}
                            className='p-2 my-2 bg-amber-600 hover:bg-amber-800 rounded-md'>
                                Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookCopyCard;