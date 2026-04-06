import React from 'react';

const StatsCard = ({cardData}) => {
    return (
        <div className='rounded-md p-4 space-y-4 bg-cyan-200 shadow-2xl font-semibold text-lg'>
            <p className=''>{cardData.title}</p>
            <p>{cardData.icon}</p>
            <p className='p-2 border size-8 rounded-full flex items-center justify-center'>
                {cardData.data}
            </p>
        </div>
    );
};

export default StatsCard;