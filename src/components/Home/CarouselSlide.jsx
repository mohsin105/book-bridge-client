import React from 'react';

const CarouselSlide = ({slide}) => {
    return (
        <div className='flex flex-col sm:flex-row h-full space-x-4 bg-gradient-to-r from-violet-600/50 to-cyan-600/50'>
            {/* Content-Left */}
            <div className='basis-2/5 h-full flex justify-center items-center text-violet-950'>
                <div className='space-y-4 font-semibold pl-8'>
                    <h3 className='text-4xl '>{slide.title}</h3>
                    <h4 className='text-2xl'>{slide.subtitle}</h4>
                </div>
            </div>
            {/* Image - Right */}
            <div className='basis-3/5 h-full'>
                <div className='h-full w-full'>
                    <img 
                        src={slide.img} 
                        alt="image"
                        className='w-full h-full object-cover object-center rounded-l-xl' />
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;