import React from 'react';

const ErrorAlert = ({message}) => {
    return (
        <div className='p-1 rounded-sm bg-rose-300 my-2'>
            {message}
        </div>
    );
};

export default ErrorAlert;