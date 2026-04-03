import React from 'react';
import { Link } from 'react-router';

const RequestItem = ({request}) => {

    return (
        <Link to={`/requests/${request.id}`}>
            <div className='grid grid-cols-4 gap-4 bg-cyan-50 shadow-xl p-2'>
                <div>
                    <p>{request.book_copy.book.title}</p>
                    <p></p>
                </div>
                <div>
                    {request.book_copy.owner.first_name}
                </div>
                <div>
                    {request.status}
                </div>
                <div>
                    {request.created_at}
                </div>
            </div>
        </Link>
    );
};

export default RequestItem;