import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';

const UpdateCopy = ({setUpdateForm,setCopyUpdateObj,copyUpdateObj,setReload}) => {
    const {register, handleSubmit, setValue,formState:{errors, isSubmitting}} = useForm();
    useEffect(()=>{
        Object.keys(copyUpdateObj).forEach((key)=> setValue(key, copyUpdateObj[key]));
    },[copyUpdateObj]);
    const onSubmit = async(data)=>{
        console.log(data);
        
        try {
            const response = await authApiClient.put(`books/${copyUpdateObj.book.id}/copies/${copyUpdateObj.id}/`,data);
            console.log(response);
            setUpdateForm(false);
            setReload(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div
            className='p-4 rounded-md'>
            <h3 className='text-xl font-semibold my-4'>Update Your Book Copy</h3>
            <form action="" 
                onSubmit={handleSubmit(onSubmit)}
                className='bg-gray-100 p-4 rounded-md'>
                <div >
                    <label htmlFor="">Availability status</label>
                    <div>
                        <select 
                            {...register('availability_status')}
                            className='w-1/2 p-2 rounded-md bg-white'>
                            <option value="AVAILABLE">Available</option>
                            <option value="BORROWED">Borrowed</option>
                            <option value="RESERVED">Reserved</option>
                            <option value="UNAVAILABLE">Unavailable</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Book condition</label>
                    <div>
                        <select 
                            {...register('book_condition')}
                            className='w-1/2 p-2 rounded-md bg-white'>
                            <option value="NEW">New</option>
                            <option value="GOOD">Good</option>
                            <option value="OLD">Old</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Note</label>
                    <div>
                        <textarea 
                            {...register('note')}
                            type='textarea'
                            className='p-2 rounded-md bg-white w-full'
                            rows={3}></textarea>
                    </div>
                </div>
                {/* Buttons */}
                <div className='space-x-4'>
                    <button className='p-2 rounded-md bg-violet-300 hover:bg-violet-500'>
                        {isSubmitting? 'Updating...' : 'Update'}
                    </button>
                    <button 
                        onClick={()=>{
                            setUpdateForm(false);
                            setCopyUpdateObj(null);
                        }}
                        className='p-2 rounded-md bg-rose-300 hover:bg-rose-500'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCopy;