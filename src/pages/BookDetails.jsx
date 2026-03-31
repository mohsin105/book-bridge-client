import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookReviews from '../components/BookDetails/BookReviews';
import BookCopies from '../components/BookDetails/BookCopies';
import BookDetailCard from '../components/BookDetails/BookDetailCard';
import apiClient from '../services/api-client';
import Button from '../components/Button';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [copies, setCopies] = useState(null);
    const [reviews, setReviews] = useState(null);
    const {id} = useParams();
    // console.log("Book Id:", id);
    useEffect(()=>{
        apiClient.get(`books/${id}`)
        .then((data)=> {
            setBook(data.data);
            console.log(data.data);
        })
        .catch(err => console.log(err));
    },[id]);
    
    useEffect(()=>{
        apiClient.get(`books/${id}/copies`)
        .then((data) =>{
            // console.log(data.data);
            setCopies(data.data);
        })
    },[id]);

    useEffect(()=>{
        apiClient.get(`books/${id}/reviews`)
        .then((data)=>{
            console.log(data.data);
            setReviews(data.data);
        })
    },[id]);
    return (
        <section className='w-11/12 md:w-5/6 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-10'>Book Details Page</h1>
            <div className='my-4'>
                {book && (<BookDetailCard book={book}/>)}
            </div>
            <div>
                {copies && (<BookCopies copies={copies}/>)}
            </div>
            <div className='my-4'>
                {reviews && (<BookReviews reviews={reviews}/>)}
            </div>
            
        </section>
    );
};

export default BookDetails;