import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookReviews from '../components/BookDetails/BookReviews';
import BookCopies from '../components/BookDetails/BookCopies';
import BookDetailCard from '../components/BookDetails/BookDetailCard';
import apiClient from '../services/api-client';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [copies, setCopies] = useState(null);
    const [reviews, setReviews] = useState(null);
    const {id} = useParams();
    const [reload, setReload] = useState(false);
    const [isBookDetailLoading, setIsBookDetailLoading] = useState(false);
    // console.log("Book Id:", id);
    useEffect(()=>{
        setIsBookDetailLoading(true);
        apiClient.get(`books/${id}`)
        .then((data)=> {
            setBook(data.data);
            // console.log(data.data);
        })
        .catch(err => console.log(err))
        .finally(()=>setIsBookDetailLoading(false));
    },[id]);
    
    useEffect(()=>{
        apiClient.get(`books/${id}/copies`)
        .then((data) =>{
            console.log(data.data);
            setCopies(data.data);
        })
    },[id, reload]);

    useEffect(()=>{
        apiClient.get(`books/${id}/reviews`)
        .then((data)=>{
            // console.log(data.data);
            setReviews(data.data);
        })
    },[id,reload]);
    return (
        <section className='w-11/12 md:w-5/6 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-8'>Book Details Page</h1>
            <div className='my-4'>
                {!isBookDetailLoading && book? (
                    <BookDetailCard book={book}/>
                ):(
                    <div className='text-4xl my-8 text-center font-semibold'>
                        <LoadingSpinner/>
                    </div>
                )}
            </div>
            <div>
                {copies && (<BookCopies copies={copies} bookId={id} setReload={setReload}/>)}
            </div>
            <div className='my-4'>
                {reviews && (<BookReviews reviews={reviews} bookId ={id} setReload={setReload}/>)}
            </div>
            
        </section>
    );
};

export default BookDetails;