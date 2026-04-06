import React from 'react';

const RecordCard = ({record}) => {
    return (
        <div className='grid grid-cols-5 gap-4 p-2 bg-gray-100 rounded-md shadow-xl'>
            <div>{record.book_copy.book.title}</div>
            <div>{record.owner.first_name}</div>
            <div>{record.borrower.first_name}</div>
            <div>{record.transaction_status}</div>
            <div>{record.due_date}</div>
        </div>
    );
};

export default RecordCard;