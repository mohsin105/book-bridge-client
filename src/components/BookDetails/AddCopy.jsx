import React from 'react';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';

const AddCopy = ({setCopyComponent,bookId}) => {
    const {register, handleSubmit, formState:{errors,}} = useForm();
    const onSubmit = async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.post(`books/${bookId}/copies/`,data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg-gray-200 p-4 rounded-md shadow-2xl'>
            <h3 className='text-xl font-semibold mb-4 text-center'>Add New Book Copy</h3>
            <div className='w-2/3 '>
                <form 
                    action="" 
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4'>
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
                    <div className='space-x-4'>
                        <Button action={'create'} children={'Create'}/>
                        <button
                            onClick={()=> setCopyComponent(false)}
                            className='p-2 bg-amber-600 hover:bg-amber-800 rounded-md'>
                                Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCopy;