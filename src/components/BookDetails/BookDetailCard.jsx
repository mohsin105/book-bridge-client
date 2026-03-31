import React from 'react';

const BookDetailCard = ({book,}) => {
    console.log(book);
    const tags = book?.tags;
    return (
        <section className='border p-4 rounded-md grid grid-cols-2'>
            <div className='rounded-md w-3/4 h-auto mx-auto bg-violet-300'>
                <img 
                    src={book?.cover_image}
                    alt="cover_image"
                    className='rounded-md object-contain' />
            </div>
            <div className='space-y-2'>
                <h2 className='font-semibold text-xl'>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Category: {book.category.name}</p>
                <div className='space-x-2'>Tags: {tags.map(tag=>(
                    <span key={tag.id}>{tag.name}</span>
                ))}</div>
                <p>Pages: {book.page_count}</p>
                <p>{book.description}</p>
            </div>
        </section>
    );
};

export default BookDetailCard;