import React from 'react';
import BookReviewCard from './BookReviewCard';

const BookReviews = ({reviews,}) => {
    return (
        <section className='bg-gray-50 border-2 border-gray-200 rounded-md p-4'>
            <h3 className='text-xl font-semibold my-4'>Reviews</h3>
            <div>
                {reviews.length==0? (
                    <p className='text-base font-bold'>No Reviews Yet</p>
                ) : (
                    <div className='space-y-4'>
                        {reviews.map(review => (
                            <BookReviewCard 
                                key={review.id}
                                review={review}/>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BookReviews;