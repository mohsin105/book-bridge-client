import React from 'react';

const FieldErrorAlert = ({message}) => {
    return (
        <div className='text-sm rounded-sm bg-rose-300 my-1 p-1'>
            {message}
        </div>
    );
};

export default FieldErrorAlert;