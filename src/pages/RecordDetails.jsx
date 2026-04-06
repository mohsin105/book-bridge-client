import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import authApiClient from '../services/auth-api-client';
import useAuthContext from '../hooks/useAuthContext';
import ExtensionForm from '../components/RecordDetails/ExtensionForm';
import ExtensionList from '../components/RecordDetails/ExtensionList';

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
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-center font-semibold my-8'>Record Details</h1>
            <div>
                {recordObj && (
                    <div>
                        <div className='space-y-4'>
                            <p>Book Title : {recordObj.book_copy.book.title} </p>
                            <p>Owner : {recordObj.book_copy.owner.first_name} </p>
                            <p>Borrower : {recordObj.borrower.first_name} </p>
                            <p>Status: {recordObj.transaction_status} </p>
                            <p>Borrowed Date: {recordObj.borrow_date} </p>
                            <p>Due Date: {recordObj.due_date}</p>
                            <p>Extension Count: {recordObj.extension_request_count}</p>
                            <p>Returned Date: {recordObj.returned_date? recordObj.returned_date : 'Yet to Return'}</p>
                        </div>
                        {/* Action Section */}
                        <div>
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