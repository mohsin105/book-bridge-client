import React from 'react';

const BookDetailCard = ({book,}) => {
    // console.log(book);
    const tags = book?.tags;
    return (
        <section className='border p-4 rounded-md grid grid-cols-1  sm:grid-cols-2'>
            <div className='rounded-md w-3/4 h-auto mx-auto bg-violet-300'>
                <img 
                    src={book?.cover_image}
                    alt="cover_image"
                    className='rounded-md object-contain' />
            </div>
            <div className='space-y-2 text-lg'>
                <h2 className='font-semibold text-2xl'>{book.title}</h2>
                <div className='space-y-2 font-semibold'>
                    <p>
                        Author: 
                        <span className=' text-indigo-900'> {book.author}</span>
                    </p>
                    <p>
                        Category:  
                        <span className=' text-indigo-900'> {book.category.name}</span>
                    </p>
                    <div className='space-x-2'>
                        Tags: {tags.map(tag=>(
                        <span 
                            key={tag.id}
                            className='p-1 px-2 rounded-2xl bg-cyan-400 text-center'>
                            {tag.name}
                        </span>
                        ))}
                    </div>
                    <p>
                        Pages: 
                        <span className=' text-indigo-900'> {book.page_count}</span>
                    </p>
                </div>
                <p>{book.description}</p>
            </div>
        </section>
    );
};

export default BookDetailCard;