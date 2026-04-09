import React from 'react';
import PremiumCard from '../components/Premium/PremiumCard';

const Premium = () => {
    const options = [
        {
            'title':'Premium',
            'price':200,
            'type':'Life-time',
            'features':[
                'Get The Blue Tick Badge',
                'Can Request books with upto 3 overdue records',
                'Can add Tag and Category',
                'High Priority in Request Queue',
                'Enjoy 14 days borrow duration',
                'Enjoy Upto 4 extension requests'
            ],
        }
    ];
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-8'>Be a Premium Member</h1>
            <h2 className='text-2xl font-semibold text-center my-4'>Enjoy Exclusive Features</h2>
            <div className='p-4 space-y-8 bg-gray-200 rounded-md'>
                {options.map((option, indx)=>(
                    <PremiumCard key={indx} option={option}/>
                ))}
            </div>
        </section>
    );
};

export default Premium;