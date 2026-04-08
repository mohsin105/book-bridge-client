import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({onChange, ratingValue}) => {
    return (
        <div className='flex space-x-4'>
            {[...Array(5)].map((_,i) =>(
                // const value = i+1;
                <FaStar
                    key={i+1}
                    onClick={()=>onChange(i+1)}
                    className={i+1 <=ratingValue? 'text-yellow-300':'text-gray-400'}/>
            ))}
        </div>
    );
};

export default StarRating;