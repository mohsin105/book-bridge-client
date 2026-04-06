import React, { useState } from 'react';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';
import SuccessAlert from '../SuccessAlert';
import useAuthContext from '../../hooks/useAuthContext';

const BookCopyCard = ({copy,setUpdateForm,setCopyUpdateObj}) => {
    const [requestForm, setRequestForm] = useState(false);
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [requestSuccessMessage, setRequestSuccessMessage]  = useState("");
    
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
                setRequestForm(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='border rounded-md p-4 bg-gray-100/50 space-y-2'>
            {requestSuccessMessage && (
                <div className='my-2'>
                    <SuccessAlert message={requestSuccessMessage} />
                </div>
            )}
            <h5>
                <span className='font-semibold'>Owner:</span>  
                {copy.owner.first_name} {copy.owner.last_name}
            </h5>
            <p>
                <span className='font-semibold'>Availability Status: </span>  
                {copy.availability_status}
            </p>
            <p>
                <span className='font-semibold'>Book Condition: </span>
                {copy.book_condition}
            </p>
            <p>
                <span className='font-semibold'>Owner Note: </span> 
                {copy.note}
            </p>
            <div>
                {user && user.id ===copy.owner.id? (
                    <button 
                        onClick={()=>{
                            setUpdateForm(true);
                            setCopyUpdateObj(copy);
                        }}
                        className='p-2 rounded-md bg-violet-400 hover:bg-violet-300'>
                        Update
                    </button>
                ) :(
                    <div onClick={()=>setRequestForm(true)}>
                        <Button 
                        action={'action'} 
                        children={`${copy.availability_status==='BORROWED'? 'Reserve' :'Request to Borrow'}`} />
                    </div>
                )}
            </div>
            {requestForm && (
                <div className='my-2 bg-gray-200 rounded-md'>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-2'>
                            <textarea 
                                {...register('message')}
                                type="textarea"
                                placeholder='Send a note with the request'
                                className='p-2 w-full bg-white rounded-md '></textarea>
                        </div>
                        <Button action={'create'} children={'Confirm Request'}/>
                        <button
                            onClick={()=> setRequestForm(false)}
                            className='p-2 bg-amber-600 hover:bg-amber-800 rounded-md'>
                                Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookCopyCard;