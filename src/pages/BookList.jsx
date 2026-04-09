import React, { useEffect, useState } from 'react';
import BookListGrid from '../components/BookList/BookListGrid';
import Button from '../components/Button';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import apiClient from '../services/api-client';
import FilterSearchBooks from '../components/BookList/FilterSearchBooks';
import useFetchCategories from '../hooks/useFetchCategories';
import Pagination from '../components/BookList/Pagination';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const [searchVal, setSearchVal] = useState('');
    const [orderVal, setOrderVal] = useState('');
    const categories = useFetchCategories();
    const {user} = useAuthContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    
    useEffect(()=>{
        fetchBooks();
    },[filterVal, searchVal,orderVal]);
    const fetchBooks = async()=>{
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
                {books? (
                    <BookListGrid books={books}/>
                ) :(
                    <div>
                        Loading......
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
                    <Link to='/book/add'>
                        <Button action={'create'} children={'Add new Book'}/>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default BookList;