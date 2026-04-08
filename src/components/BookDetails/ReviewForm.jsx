import React from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';
import StarRating from './StarRating';

const ReviewForm = ({bookId, setReload}) => {
    const {register, handleSubmit,setValue,watch ,formState:{errors, isSubmitting}} = useForm();
    const ratingValue = watch('rating');
    const onSubmit = async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.post(`books/${bookId}/reviews/`, data);
            console.log(response);
            setReload(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Rating: </label>
                    <StarRating
                        onChange={(value)=>setValue('rating', value)}
                        ratingValue={ratingValue}
                        />
                    <input 
                        {...register('rating')}
                        type="hidden" />
                </div>
                <div>
                    <textarea 
                        {...register('comment')}
                        type='textarea'
                        placeholder='Write your review'
                        className='w-full p-4 rounded-md bg-slate-100'></textarea>
                </div>
                <div className='flex justify-end my-2'>
                    <button
                        type='submit' 
                        className='p-1 bg-cyan-600 hover:bg-cyan-400 rounded-md'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;