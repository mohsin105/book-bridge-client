import React from 'react';
import BookCopyCard from './BookCopyCard';
import Button from '../Button';
import { Link } from 'react-router';

const BookCopies = ({copies,}) => {
    return (
        <section>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold my-4 '>Copies</h2>
                <div className='self-center'>
                    <Link to='/book/add'>
                        <Button action={'create'} children={'Add new Copy'}/>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {copies.map(copy=>(
                    <BookCopyCard key={copy.id} copy={copy}/>
                ))}
            </div>
        </section>
    );
};

export default BookCopies;