import React from 'react';

const PremiumCard = ({option}) => {
    return (
        <div className='bg-violet-100 rounded-lg shadow-xl p-4'>
            <div className='flex justify-between mb-4'>
                <h3 className='text-2xl font-bold'>{option.title}</h3>
                <div className='space-y-2'>
                    <p className='text-xl bg-violet-400 p-2 text-center font-bold rounded-2xl shadow-2xl'>BDT: {option.price}</p>
                    <p className='text-base bg-gray-300 p-2 rounded-2xl'>{option.type}</p>
                </div>
            </div>
            <div>
                <p className='text-xl font-semibold'>Features: </p>
                <div className='flex justify-between'>

                    <ul className='space-y-2 p-2 list-disc list-inside text-lg'>
                        {option.features.map((feature, indx)=>(
                            <li key={indx}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className='self-end text-gray-200'>
                        <button 
                            className='font-semibold text-xl p-2 bg-violet-700 hover:bg-violet-600 rounded-md'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumCard;