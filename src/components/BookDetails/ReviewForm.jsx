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
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-2 bg-white p-2'>
                <div>
                    <label htmlFor="" className=''>Rating: </label>
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
                        disabled={isSubmitting}
                        className='p-2 bg-cyan-400 hover:bg-cyan-300 rounded-md text-lg'>
                        {isSubmitting? 'Submitting....' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;