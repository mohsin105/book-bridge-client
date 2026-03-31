import React from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <div className='w-11/12 md:w-1/2 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-8'>Book Create Page</h1>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <button className='w-full p-4 rounded-md border bg-cyan-400 hover:bg-cyan-600'>
                        Create Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;