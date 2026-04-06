import React from 'react';
import StatsCard from './StatsCard';

const StatsCardSection = ({statCardData}) => {
    // console.log(statCardData);
    const statsCardData = [
        {
            'title':'Active Borrows',
            'icon':'',
            'data':statCardData.records.active_borrowed,
        },
        {
            'title':'Pending Requests',
            'icon':'',
            'data':'2',
        },
        {
            'title':'Sent Requests',
            'icon':'',
            'data':statCardData.requests.pending_sent,
        },
        {
            'title':'Overdue Books',
            'icon':'',
            'data':'5',
        },
    ];
    return (
        <div className='grid grid-col-2 md:grid-cols-4 gap-4'>
            {statsCardData.map((cardData, indx) =>(
                <StatsCard key={indx} cardData={cardData}/>
            ))}

        </div>
    );
};

export default StatsCardSection;