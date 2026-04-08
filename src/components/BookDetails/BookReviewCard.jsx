import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { FaStar } from 'react-icons/fa';
import authApiClient from '../../services/auth-api-client';
import { useParams } from 'react-router';

const BookReviewCard = ({review,setUpdatingReview,setShowUpdateForm,setReload}) => {
    const {user} = useAuthContext();
    const {id} = useParams();
    const deleteReview = async() =>{
        try {
            const response = await authApiClient.delete(`books/${id}/reviews/${review.id}/`);
            console.log(response);
            setReload(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='bg-white rounded-md shadow-xl p-4'>
            <p>by <span className='font-semibold'>{review.user.first_name} {review.user.last_name}</span></p>
            <p>{review.rating}</p>
            <div className='flex gap-1'>
                {[...Array(5)].map((_,i) =>(
                    <FaStar key={i} className={i+1<=review.rating? "text-yellow-400":"text-gray-300 "}/>
                ))}
                {/* <FaStar/> */}
            </div>
            <p>{review.comment}</p>
            {user && user.id === review.user.id && (
                <div className='flex justify-end space-x-4 font-bold'>
                    <button 
                        onClick={()=>{
                            setShowUpdateForm(true);
                            setUpdatingReview(review);
                        }}
                        className='text-amber-600 hover:text-violet-700'>
                        Update
                    </button>
                    <button 
                        onClick={()=> deleteReview()}
                        className='text-rose-600 hover:text-rose-500'>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookReviewCard;