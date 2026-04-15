import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import authApiClient from '../services/auth-api-client';
import useAuthContext from '../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import LoadingSpinner from '../components/LoadingSpinner';
import dayjs from 'dayjs';

const RequestDetails = () => {
    // Owner updates the status to Accept or Reject - In a separate form
    //Reqeuster updates the message - In a separate form , using useRef()
    //Requester Cancells the request - In a separate call
    const {requestId} = useParams();
    const [requestObj, setReqeustObj] = useState(null);
    const {user} = useAuthContext();
    const {register, handleSubmit, formState:{isSubmitting}} = useForm();
    const  messageRef = useRef(null);
    const [messageUpdateForm, setMessageUpdateForm] = useState(false);
    const [requestMessage, setRequestMessage] = useState('');
    const [isCancelling, setIsCancelling] = useState(false);
    const [isMessageUpdating, setIsMessageUpdating] = useState(false);
    // console.log(requestId);
    useEffect(()=>{
        // authApiClient.get(`borrow/requests/${requestId}`)
        // .then(data=>{
        //     console.log(data.data);
        //     setReqeustObj(data.data);
        // })
        // .catch(err => console.log(err))
        fetchRequest();
    },[requestId]);

    const fetchRequest = async()=>{
        try {
            const response = await authApiClient.get(`borrow/requests/${requestId}`);
            const data = await response.data;
            setReqeustObj(data);
            setRequestMessage(data.message);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    // Only Status Update form, by the owner
    const onSubmit = async(data) =>{
        // console.log(data);
        // const newRequestObj = {...requestObj, 'status':data.status};
        // console.log(newRequestObj);
        try {
            const response = await authApiClient.patch(`borrow/requests/${requestId}/`, data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleMessageUpdate = async(event) => {
        // console.log(event);
        setIsMessageUpdating(true);
        event.preventDefault();
        // console.log(messageRef.current.value);
        const messageData = {'message':messageRef.current.value};
        // console.log(messageData);
        try {
            const response = await authApiClient.patch(`borrow/requests/${requestId}/`, messageData);
            // console.log(response);
            setMessageUpdateForm(false);
        } catch (error) {
            console.log(error);
        }finally{
            setIsMessageUpdating(false);
        }
    };
    const cancelRequest = async()=>{
        setIsCancelling(true);
        try {
            const statusData = {'status':'CANCELLED'};
            // console.log(statusData);
            const response = await authApiClient.patch(`borrow/requests/${requestId}/`, statusData);
            // console.log(response);
            await fetchRequest();
        } catch (error) {
            console.log(error);
        }finally{
            setIsCancelling(false);
        }
    };
    return (
        <div className='w-11/12 mx-auto p-4 text-lg'>
            <h1 className='text-2xl font-semibold text-center my-8'>Request Details</h1>
            <div>
                {requestObj? (
                    <div className='space-y-4'>
                        <p>Book Title: {requestObj.book_copy.book.title}</p>
                        <p>Owner : {requestObj.book_copy.owner.first_name}</p>
                        {/* Update Status- Accept or Reject -> only by owner */}
                        <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                            <div className='space-x-4'>
                                <label htmlFor="">Status</label>
                                <select 
                                    {...register('status')}
                                    disabled={user.id !== requestObj.book_copy.owner.id}
                                    className='w-fit p-4 rounded-sm bg-gray-100 shadow-2xl'>
                                    <option value="">{requestObj.status_display}</option>
                                    <option value="PENDING">Pending</option>
                                    <option value="REJECTED">Rejected</option>
                                    <option value="ACCEPTED">Accepted</option>
                                </select>
                            </div>
                            {user.id === requestObj.book_copy.owner.id && (
                                <button 
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-cyan-500 hover:bg-cyan-600 p-2 rounded-md'>
                                    {isSubmitting? 'Updating...' : 'Update'} 
                                </button>
                            )}
                        </form>
                        {/* Message Update Option - only for Requester */}
                        <form action="" onSubmit={handleMessageUpdate}>
                            <label htmlFor="">Message</label>
                            <div>
                                <textarea 
                                    // name="" 
                                    id="message"
                                    type='textarea'
                                    disabled={!messageUpdateForm} // if true, then not disabled. 
                                    className='w-full p-4 bg-gray-100 rounded-md'
                                    value={requestMessage}
                                    ref={messageRef}
                                    onChange={(e)=>setRequestMessage(e.target.value)}></textarea>
                            </div>
                            {/* Message Update Form Buttons, only available when reqeuster activates outer 'Update Message' button */}
                            <div className='my-2'>
                                {messageUpdateForm === true && (
                                    <div className='space-x-4'>
                                        <button
                                            type='submit'
                                            disabled={isMessageUpdating}
                                            className='p-2 bg-green-400 hover:bg-green-600 rounded-md'>
                                            {isMessageUpdating? 'Updating ...' : 'Update'}
                                        </button>
                                        <button 
                                            onClick={()=>{
                                                setMessageUpdateForm(false);
                                                setRequestMessage(requestObj.message);
                                            }}
                                            className='p-2 rounded-md bg-amber-200 hover:bg-amber-400'>
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                        <div className='my-2'>
                            {user.id === requestObj.requested_by.id && messageUpdateForm === false && requestObj.status === 'PENDING' && (
                                <button
                                    onClick={()=>setMessageUpdateForm(true)} 
                                    className='p-2 bg-violet-400 hover:bg-rose-500 rounded-md'>
                                    Update Message
                                </button>
                            )}
                        </div>
                        <p>
                            Created At: 
                             {dayjs(requestObj.created_at).format("DD MMM YYYY, hh:mm A")}
                        </p>
                        <p>
                            Updated At: 
                             {dayjs(requestObj.updated_at).format("DD MMM YYYY, hh:mm A")}
                        </p>
                        <p>Requested By : {requestObj.requested_by.first_name}</p>
                        {/* Requester Cancels the Request */}
                        <div className='my-4'>
                            {user.id == requestObj.requested_by.id && requestObj.status === 'PENDING' && (

                                <button 
                                    onClick={()=>cancelRequest()}
                                    disabled={isCancelling}
                                    className='p-2 rounded-md bg-rose-400 hover:bg-rose-600'>
                                    {isCancelling? 'Cancelling...' : 'Cancel Reqeust'}
                                </button>
                            )}
                        </div>
                        <p></p>
                    </div>
                ) :  (
                    <div>
                        <LoadingSpinner/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestDetails;