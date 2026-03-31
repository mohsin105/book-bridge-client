import React from 'react';

const BookReviewCard = ({review,}) => {
    return (
        <div className='bg-white rounded-md shadow-xl p-4'>
            <p>by <span className='font-semibold'>{review.user.first_name} {review.user.last_name}</span></p>
            <p>{review.rating}</p>
            <p>{review.comment}</p>
        </div>
    );
};

export default BookReviewCard;