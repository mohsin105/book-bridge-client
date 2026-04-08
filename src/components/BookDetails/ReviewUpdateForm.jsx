import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../../services/auth-api-client';
import { useParams } from 'react-router';
import StarRating from './StarRating';

const ReviewUpdateForm = ({review,setShowUpdateForm, setUpdatingReview, setReload}) => {
    const {id} = useParams();
    const {register, handleSubmit, setValue,watch,formState:{errors,}} = useForm();
    useEffect(()=>{
        Object.keys(review).forEach((key)=> setValue(key, review[key]));
    },[review]);
    const ratingValue = watch('rating');
    const onSubmit = async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.put(`books/${id}/reviews/${review.id}/`, data);
            console.log(response);
            if(response.status === 200){
                setUpdatingReview(null);
                setShowUpdateForm(false);
                setReload(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Rating</label>
                    <StarRating 
                        onChange={(value)=> setValue('rating',value)}
                        ratingValue={ratingValue}/>
                    <input 
                        {...register('rating')}
                        type="hidden" />
                </div>
                <div>
                    <textarea 
                        {...register('comment')}
                        className='w-full p-4 rounded-md bg-gray-300'></textarea>
                </div>
                <div className='flex justify-end space-x-4'>
                    <button
                        type='submit'
                        className='p-1 bg-amber-400 hover:bg-amber-200 rounded-md'>
                        Submit
                    </button>
                    <button
                        onClick={()=>{
                            setShowUpdateForm(false);
                            setUpdatingReview(null);
                        }}
                        className='p-1 bg-rose-300 hover:bg-rose-500 rounded-md'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewUpdateForm;