import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import authApiClient from '../services/auth-api-client';
import useAuthContext from '../hooks/useAuthContext';
import ExtensionForm from '../components/RecordDetails/ExtensionForm';
import ExtensionList from '../components/RecordDetails/ExtensionList';
import dayjs from 'dayjs';

const RecordDetails = () => {
    const {id} = useParams();
    const [recordObj, setRecordObj] = useState(null);
    const {user} = useAuthContext();
    const [extesnionForm, setExtensionForm] = useState(false);
    const [extensionList, setExtensionList] = useState([]);
    useEffect(()=>{
        fetchRecord();
        fetchExtensions();
    },[id]);
    const fetchRecord = async() =>{
        try {
            const response = await authApiClient.get(`borrow/records/${id}`);
            console.log(response.data);
            setRecordObj(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchExtensions = async()=>{
        try {
            const response = await authApiClient.get(`borrow/records/${id}/extensions`);
            console.log(response.data);
            setExtensionList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-11/12 mx-auto bg-slate-100 p-4'>
            <h1 className='text-2xl  font-semibold my-8'>Borrow Record Details</h1>
            <div>
                {recordObj && (
                    <div>
                        <div className='space-y-4 '>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                {/* Book Info */}
                                <div className='p-4 rounded-md bg-white'>
                                    <h4 className='text-xl font-semibold mb-4'>Book Information</h4>
                                    <p className='text-lg font-semibold'>{recordObj.book_copy.book.title} </p>
                                </div>
                                {/* Book-Copy Info */}
                                <div className='p-4 rounded-md bg-white'>
                                    <h4 className='text-xl font-semibold mb-4'>Book-Copy Information</h4>
                                    <div className='p-2'>
                                        <p>
                                            <span className='font-semibold'>Book Condition: </span>
                                            {recordObj.book_copy.book_condition_display}
                                        </p>
                                        <p>
                                            <span className='font-semibold'>Owner Note: </span>
                                            {recordObj.book_copy.note}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* ------- Record Details ---------- */}
                            <h3 className='text-xl font-semibold mb-4'>Record Details</h3>
                            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 px-2 text-lg bg-white rounded-md py-4'>
                                {/* Record Details */}
                                <p className='place-self-center p-2 rounded-2xl bg-cyan-300 text-lg font-semibold w-fit flex justify-center items-center'>
                                    {recordObj.transaction_status_display}
                                </p>
                                <div>
                                    <p>Borrowed Date: </p>
                                    <p className="font-semibold">{dayjs(recordObj.borrow_date).format("DD MMM YYYY, hh:mm A")}</p>
                                </div>
                                <div>
                                    <p>Due Date: </p>
                                    {dayjs(recordObj.due_date).format("DD MMM YYYY, hh:mm A")}
                                </div>
                                <div>
                                    <p>Returned Date: </p>
                                    {recordObj.returned_date? 
                                        dayjs(recordObj.returned_date).format("DD MMM YYYY, hh:mm A") : 
                                        'Yet to Return'}
                                </div>
                                <div>
                                    <p>Extension Count:</p>
                                    {recordObj.extension_request_count}
                                </div>
                            </div>
                            {/* Participants Info */}
                            <h3 className='text-xl font-semibold my-4'>Participants</h3>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                <div className='rounded-md bg-white p-4 space-y-2'>
                                    <p className='text-lg font-semibold mb-2'>Owner :</p>
                                    <p>{recordObj.book_copy.owner.first_name} {recordObj.book_copy.owner.last_name}</p>
                                    <p>{recordObj.book_copy.owner.email} </p>
                                    
                                </div>
                                <div className='rounded-md bg-white p-4 space-y-2'>
                                    <p className='text-lg font-semibold mb-2'>Borrower :</p>
                                    <p>{recordObj.borrower.first_name} {recordObj.borrower.last_name}</p> 
                                    <p>{recordObj.borrower.email}</p>
                                </div>
                            </div>
                        </div>
                        {/* Action Section */}
                        <div className='text-lg font-semibold'>
                            <div>
                                {user.id === recordObj.book_copy.owner.id && (
                                    <button className='p-4 bg-cyan-200 rounded-md my-4'>
                                        Mark As Returned
                                    </button>
                                )}
                            </div>
                            <div>
                                {user.id === recordObj.borrower.id &&  recordObj.transaction_status !== 'RETURNED' && (
                                    <button 
                                        onClick={()=> setExtensionForm(true)}
                                        className='p-4 bg-rose-200 hover:bg-violet-300 rounded-md my-4'>
                                        Request Extension
                                    </button>
                                )}
                            </div>
                            <div>
                                {extesnionForm && (
                                    <div>
                                        <ExtensionForm setExtensionForm={setExtensionForm}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='my-4'>
                <h2 className='text-2xl font-semibold '>Extension History</h2>
                {recordObj && extensionList && (
                    <ExtensionList extensionList={extensionList} recordObj={recordObj}/>
                )}
            </div>
        </div>
    );
};

export default RecordDetails;