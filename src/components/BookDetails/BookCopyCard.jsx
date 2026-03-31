import React from 'react';
import Button from '../Button';

const BookCopyCard = ({copy,}) => {
    return (
        <div className='border rounded-md p-4 bg-gray-100/50 space-y-2'>
            <h5>Owner: {copy.owner.first_name} {copy.owner.last_name}</h5>
            <p>Availability Status: {copy.availability_status}</p>
            <p>Book Condition: {copy.book_condition}</p>
            <p>Owner Note: {copy.note}</p>
            <Button 
                action={'action'} 
                children={`${copy.availability_status=='BORROWED'? 'Reserve' :'Request to Borrow'}`} />
        </div>
    );
};

export default BookCopyCard;