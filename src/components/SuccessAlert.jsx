import React from 'react';

const SuccessAlert = ({message,}) => {
    return (
        <div className='bg-cyan-200 p-2 rounded-sm border-2 font-semibold'>
            {message}
        </div>
    );
};

export default SuccessAlert;