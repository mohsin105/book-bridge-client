import dayjs from 'dayjs';
import React from 'react';

const RecordCard = ({record}) => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-5 gap-4 p-2 bg-gray-100 rounded-md shadow-xl'>
            <div className='space-y-2'>
                <p>{record.book_copy.book.title}</p>
                <p className='block md:hidden'><span className='font-semibold'>Owner: </span>{record.owner.first_name}</p>
                <p className='block md:hidden'>
                    <span className='font-semibold'>Borrower: </span>
                    {record.borrower.first_name}
                </p>

            </div>
            <div className='hidden md:block'>{record.owner.first_name}</div>
            <div className='hidden md:block'>{record.borrower.first_name}</div>
            <div>{record.transaction_status_display}</div>
            <div>
                {dayjs(record.due_date).format("DD MMM YYYY, hh:mm A")}
            </div>
        </div>
    );
};

export default RecordCard;