import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router';

const RequestItem = ({request}) => {

    return (
        <Link to={`/dashboard/requests/${request.id}`}>
            <div className='grid grid-cols-4 gap-4 bg-cyan-50 shadow-xl p-2'>
                <div>
                    <p>{request.book_copy.book.title}</p>
                    <p></p>
                </div>
                <div>
                    {request.book_copy.owner.first_name}
                </div>
                <div>
                    {request.status_display}
                </div>
                <div>
                    {dayjs(request.created_at).format("DD MMM YYYY, hh:mm A")}
                </div>
            </div>
        </Link>
    );
};

export default RequestItem;