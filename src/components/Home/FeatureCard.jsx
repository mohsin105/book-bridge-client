import React from 'react';

const FeatureCard = ({feature, gradient}) => {
    return (
        <div className={`border rounded-md p-4 shadow-xl bg-gradient-to-r ${gradient}`}>
            <p className='text-xl font-semibold'>{feature.title}</p>
            <div className='my-2 p-2'>
                <ul className='space-y-2 text-lg'>
                    {feature.points.map((point, indx)=>(
                        <li key={indx}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FeatureCard;