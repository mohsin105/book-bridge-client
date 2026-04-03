import React from 'react';
import { Link } from 'react-router';

const RequestList = ({requests, type}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-2 font-semibold bg-cyan-200 p-2'>
                <div>Book Name</div>
                <div>{type=='received'? 'Borrower' : 'Owner'}</div>
                <div>Status</div>
            </div>
            {requests && (
                <div>
                    {requests.map(request => (
                        <Link to={`/borrow/requests/${request.id}`} key={request.id}>
                            <div  className='grid grid-cols-3 gap-2'>
                                <div>
                                    <p>{request.book_copy.book.title}</p>
                                    <p></p>
                                </div>
                                <div>
                                    {type=='received'?request.requested_by.first_name : request.book_copy.owner.first_name}
                                </div>
                                <div>
                                    {request.status}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
        
    );
};

export default RequestList;