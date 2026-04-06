import React, { useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';

const ExtensionCard = ({extension,recordObj}) => {
    const {user} = useAuthContext();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [extensionMessageCopy, setExtensionMessageCopy] = useState(extension.message);
    const [extesionUpdateForm, setExtensionUpdateForm] = useState(false);
    const [statusCopy, setStatusCopy] = useState(extension.extension_status);
    const onSubmit = async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.patch(`borrow/records/${recordObj.id}/extensions/${extension.id}/`,data);
            // console.log(response);
            setExtensionUpdateForm(false);
        } catch (error) {
            console.log(error);
        }
    };
    const updateStatus = async(newStatus)=>{
        const statusData={'extension_status':newStatus};
        try {
            const response = await authApiClient.patch(`borrow/records/${recordObj.id}/extensions/${extension.id}/`,statusData);
            // console.log(response);
            setStatusCopy(newStatus);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='shadow-xl rounded-md bg-gray-100 p-4 space-y-4'>
            <div className='flex justify-between'>
                <p>Created At: {extension.created_at}</p>
                <p>{statusCopy}</p>
            </div>
            <div>
                <p>Message from borrower: </p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <textarea 
                        {...register('message')}
                        value={extensionMessageCopy}
                        disabled={!extesionUpdateForm}
                        onChange={e => setExtensionMessageCopy(e.target.value)}
                        className='w-full p-2 bg-white rounded-md'></textarea>
                    <div>
                        {extesionUpdateForm && (
                            <div className='space-x-4'>
                                <button className='p-1 rounded-md bg-violet-200 hover:bg-violet-300'>
                                    Update
                                </button>
                                <button 
                                    onClick={()=> extesionUpdateForm(false)}
                                    className='p-1 rounded-md bg-rose-200 hover:bg-rose-300'>
                                    Cancel Edit
                                </button>
                            </div>
                        )}
                    </div>
                </form>
                {/* <p className=''>{extension.message}</p> */}
            </div>
            <p>Reqeusted Date: {extension.requested_due_date}</p>
            {/* Action Section */}
            <div>
                {/* Borrower Option - Only for pending requests */}
                {user.id === recordObj.borrower.id && statusCopy === 'PENDING' && (
                    <div className='space-x-4'>
                        <button
                            onClick={() => setExtensionUpdateForm(true)}
                            className='p-2 bg-amber-200 hover:bg-violet-300 rounded-md'>
                            Update Message
                        </button>
                        <button
                            onClick={()=> updateStatus('CANCELLED')}
                            className='p-2 bg-rose-400 hover:bg-rose-300 rounded-md'>
                            Cancel Request
                        </button>
                    </div>
                )}
                {/* Owner Option -  */}
                {user.id === recordObj.book_copy.owner.id && statusCopy === 'PENDING' && (
                    <div className='space-x-4'>
                        <button 
                            onClick={() => updateStatus('ACCEPTED')}
                            className='p-2 rounded-md bg-green-300 hover:bg-green-500'>
                            Accept
                        </button>
                        <button 
                            onClick={()=> updateStatus('REJECTED')}
                            className='p-2 rounded-md bg-rose-400 hover:bg-rose-600 '>
                            Reject
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExtensionCard;