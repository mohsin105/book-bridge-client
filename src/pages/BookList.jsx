import React, { useEffect, useState } from 'react';
import BookListGrid from '../components/BookList/BookListGrid';
import Button from '../components/Button';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import apiClient from '../services/api-client';
import FilterSearchBooks from '../components/BookList/FilterSearchBooks';
import useFetchCategories from '../hooks/useFetchCategories';
import Pagination from '../components/BookList/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const [searchVal, setSearchVal] = useState('');
    const [orderVal, setOrderVal] = useState('');
    const categories = useFetchCategories();
    const {user} = useAuthContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        fetchBooks();
    },[filterVal, searchVal,orderVal]);
    const fetchBooks = async()=>{
        setIsLoading(true);
        try {
            // let url = `books/`;
            console.log('filterVal: ', filterVal, 'searchVal: ', searchVal);
            
            // if(searchVal){
            //     url = `books/?search=${searchVal}`;
            // }
            // else if(filterVal){
            //     url = `books/?category_id=${filterVal}`;
            // }
            // const response = await apiClient.get(url);
            const response = await apiClient.get(`books/?search=${searchVal}&category_id=${filterVal}&ordering=${orderVal}`);
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    };
    return (
        <section>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>All Books:</h1>
            <div className='my-4'>
                <FilterSearchBooks
                    setFilterVal={setFilterVal}
                    setSearchVal={setSearchVal}
                    categories = {categories}
                    setOrderVal={setOrderVal}/>
            </div>
            <div>
                {!isLoading && books.length>0? (
                    <BookListGrid books={books}/>
                ) :!isLoading && books.length==0?(
                    <div>
                        <p className='text-4xl my-8 text-center font-semibold'>
                            No book Found
                        </p>
                    </div>
                ):(
                    <div className='text-center text-4xl'>
                        Loading
                        <LoadingSpinner/>
                    </div>
                )}
            </div>
            <div className='my-4 text-center'>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
            </div>
            <div>
                {user && (
                    <Link to='/dashboard/book/add'>
                        <Button action={'create'} children={'Add new Book'}/>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default BookList;