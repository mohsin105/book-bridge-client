import React, { useEffect, useState } from 'react';
import BookListGrid from '../components/BookList/BookListGrid';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const {testVal,} = useAuthContext();
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/v1/books/')
        .then((data)=> {
            setBooks(data.data);
            // console.log(data.data);
        })
        .catch((err)=> console.log(err))
    },[]);
    return (
        <section>
            <h1 className='text-4xl font-bold text-center my-8'>All Books:</h1>
            <p>search by name , category, author</p>
            <p>filter by category, tags</p>
            <BookListGrid books={books}/>
            <p>Pagination System</p>
            <Link to='/book/add'>
                <Button action={'create'} children={'Add new Book'}/>
            </Link>
            <div>
                {testVal}
            </div>
        </section>
    );
};

export default BookList;