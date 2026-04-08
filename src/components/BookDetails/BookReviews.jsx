import React, { useState } from 'react';
import BookReviewCard from './BookReviewCard';
import useAuthContext from '../../hooks/useAuthContext';
import ReviewForm from './ReviewForm';
import ReviewUpdateForm from './ReviewUpdateForm';

const BookReviews = ({reviews,bookId,setReload}) => {
    const {user} = useAuthContext();
    const [updatingReview, setUpdatingReview] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    return (
        <section className='bg-gray-50 border-2 border-gray-200 rounded-md p-4'>
            <h3 className='text-xl font-semibold my-4'>Reviews</h3>
            {user && (
                <div className='my-2'>
                    <ReviewForm bookId={bookId} setReload={setReload}/>
                </div>
            )}
            <div>
                {reviews.length==0? (
                    <p className='text-base font-bold'>No Reviews Yet</p>
                ) : (
                    <div className='space-y-4'>
                        {reviews.map(review => (
                            <div key={review.id}>
                                {updatingReview && updatingReview.id === review.id? (
                                    <div>
                                        <ReviewUpdateForm 
                                            review={review}
                                            setUpdatingReview={setUpdatingReview}
                                            setShowUpdateForm={setShowUpdateForm}
                                            setReload={setReload}/>
                                    </div>
                                ) : (
                                    <BookReviewCard 
                                        review={review}
                                        setUpdatingReview={setUpdatingReview}
                                        setShowUpdateForm={setShowUpdateForm}
                                        setReload={setReload}/>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BookReviews;