import React from 'react';
import { Link } from 'react-router';

const BookListGrid = ({books}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4'>
            {books.map(book => (
                <Link to={`/book/${book.id}`}
                    key={book.id}>
                    <div 
                        className='border-2 rounded-md shadow-xl bg-gray-100 border-gray-400 p-2 text-center'>
                            <div className='flex justify-center rounded-md mb-4'>
                                <img 
                                    src={book.cover_image} 
                                    alt="cover_image"
                                    className='rounded-md h-42 object-center' />
                            </div>
                            <h3 className='text-lg font-semibold'>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.category.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BookListGrid;