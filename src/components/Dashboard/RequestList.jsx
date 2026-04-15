import React from 'react';
import { Link } from 'react-router';

const RequestList = ({objects,type,role}) => {
    // console.log(objects);
    return (
        <div>
            <div className='grid grid-cols-3 gap-2 font-semibold bg-cyan-200 p-2'>
                <div>Book Name</div>
                <div>{role==='received'? 'Borrower' : 'Owner'}</div>
                <div>Status</div>
            </div>
            {objects && (
                <div>
                    {objects.map(obj => (
                        <Link 
                            to={type==='request'? `/dashboard/requests/${obj.id}` : `/dashboard/records/${obj.id}`} 
                            key={obj.id}>
                            <div  className='grid grid-cols-3 gap-2'>
                                <div>
                                    <p>{type === 'reqeust'? obj.book_copy.book.title : obj.book_copy.book.title}</p>
                                    <p></p>
                                </div>
                                <div>
                                    {type === 'request'? (
                                        <p>
                                            {role=='received'?obj.requested_by.first_name : obj.book_copy.owner.first_name}
                                        </p>
                                    ):(
                                        <p>
                                            {role=='received'?obj.borrower.first_name : obj.owner.first_name}
                                        </p>
                                    )}

                                    
                                    
                                </div>
                                <div>
                                    {type==='request'? obj.status :  obj.transaction_status}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <div >
                {objects && objects.length === 0 && (
                    <div className='font-semibold text-center my-2'>
                        No Pending Requests
                    </div>
                )}
            </div>
        </div>
        
    );
};

export default RequestList;