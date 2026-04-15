import dayjs from 'dayjs';
import React from 'react';

const RecordCard = ({record}) => {
    return (
        <div className='grid grid-cols-5 gap-4 p-2 bg-gray-100 rounded-md shadow-xl'>
            <div>{record.book_copy.book.title}</div>
            <div>{record.owner.first_name}</div>
            <div>{record.borrower.first_name}</div>
            <div>{record.transaction_status_display}</div>
            <div>
                {dayjs(record.due_date).format("DD MMM YYYY, hh:mm A")}
            </div>
        </div>
    );
};

export default RecordCard;