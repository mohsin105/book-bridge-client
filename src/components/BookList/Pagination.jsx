import React from 'react';

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    return (
        <div className='space-x-4'>
            {Array.from({length:4},(_,i)=>(
                <button
                    key={i+1}
                    className='p-1 px-2  rounded-md bg-violet-400'>
                    {i+1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;