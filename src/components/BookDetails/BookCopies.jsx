import React, { useState } from 'react';
import BookCopyCard from './BookCopyCard';
import Button from '../Button';
import { Link } from 'react-router';
import AddCopy from './AddCopy';
import SuccessAlert from '../SuccessAlert';

const BookCopies = ({copies,bookId,setNewCopyCreated}) => {
    const [copyComponent, setCopyComponent] = useState(false);
    const [copyCreateMessage, setCopyCreateMessage] = useState("");
    return (
        <section>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold my-4 '>Copies</h2>
                <div className='self-center' onClick={()=> setCopyComponent(true)}>
                    <Button 
                        action={'create'} 
                        children={'Add new Copy'}
                        
                        />
                </div>
            </div>
            {/* create New Book Copy */}
            <div>
                {copyComponent && (
                    <div className='my-4'>
                        <AddCopy 
                            setCopyComponent={setCopyComponent} 
                            bookId={bookId}
                            setCopyCreateMessage={setCopyCreateMessage}
                            setNewCopyCreated={setNewCopyCreated}/>
                    </div>
                )}
            </div>
            {copyCreateMessage && (
                <div className='my-2'>
                    <SuccessAlert message={copyCreateMessage}/>
                </div>
            )}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {copies.map(copy=>(
                    <BookCopyCard key={copy.id} copy={copy}/>
                ))}
            </div>
        </section>
    );
};

export default BookCopies;