import React, { useEffect, useRef, useState } from 'react';
import BookCopyCard from './BookCopyCard';
import Button from '../Button';
import { Link } from 'react-router';
import AddCopy from './AddCopy';
import SuccessAlert from '../SuccessAlert';
import UpdateCopy from './UpdateCopy';

const BookCopies = ({copies,bookId,setReload}) => {
    const [copyComponent, setCopyComponent] = useState(false);
    const [copyCreateMessage, setCopyCreateMessage] = useState("");
    const [updateForm, setUpdateForm] = useState(false);
    const updateFormRef = useRef(null); //to capture the updateform component, and apply DOM method on it
    const [copyUpdateObj, setCopyUpdateObj] = useState(null); //the book-copy object that is being updated
    // To move the screen to UpdateForm Component
    useEffect(()=>{
        if(updateForm && updateFormRef.current){
            updateFormRef.current.scrollIntoView({
                behaviour:'smooth',
                block:'start'
            })
        }
    },[updateForm]);
    return (
        <section>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold my-4 '>Copies</h2>
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
                            setReload={setReload}/>
                    </div>
                )}
            </div>
            {copyCreateMessage && (
                <div className='my-2'>
                    <SuccessAlert message={copyCreateMessage}/>
                </div>
            )}
            {/* Copies List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {copies.length>0? (
                    copies.map(copy=>(
                    <BookCopyCard 
                        key={copy.id} 
                        copy={copy} 
                        setUpdateForm={setUpdateForm} 
                        setCopyUpdateObj={setCopyUpdateObj}/>
                ))
                ) : (
                    <div>
                        <p className='text-xl my-4 text-center font-semibold'>
                            No Copies Found. 
                        </p>
                    </div>
                )
                }
            </div>
            {/* Copy Update Form */}
            {updateForm && (
                <div ref={updateFormRef}>
                    <UpdateCopy 
                        setUpdateForm={setUpdateForm}
                        setCopyUpdateObj={setCopyUpdateObj} 
                        copyUpdateObj={copyUpdateObj}
                        setReload={setReload}/>
                </div>
            )}
        </section>
    );
};

export default BookCopies;