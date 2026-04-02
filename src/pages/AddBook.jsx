import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../services/api-client';

const AddBook = () => {
    const {register, handleSubmit, formState:{errors,}} = useForm();
    const [categories, setCategories] = useState([]); //null instead of [] causes error
    const [tags, setTags] = useState([]);

    useEffect(()=>{
        apiClient.get('categories/')
        .then(data =>{
            console.log(data.data);
            setCategories(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    useEffect(()=>{
        apiClient.get('tags/')
        .then(data=>{
            console.log(data.data);
            setTags(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <div className='w-11/12 md:w-1/2 mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-8'>Book Create Page</h1>
            <div className='p-4 mb-8'>
                <form 
                    action="" 
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4'>
                    <div>
                        <label htmlFor="">Title</label>
                        <div>
                            <input 
                                {...register('title')}
                                type="text"
                                placeholder='Book Title'
                                className='w-full p-2 rounded-md bg-gray-100' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <div>
                            <select 
                                {...register('category')}
                                className='w-full p-2 rounded-md bg-gray-50'
                                >
                                <option value="">Select A Category</option>
                                {categories.map(category =>(
                                    <option 
                                        key={category.id}
                                        value={category.id}
                                        >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Tags</label>
                        <div className='space-x-4 bg-gray-100 p-2 rounded-md'>
                            {tags.map(tag =>(
                                <span
                                    key={tag.id}
                                    className='text-lg space-x-2 '
                                    >
                                    <input 
                                        {...register('tags')}
                                        
                                        type="checkbox"
                                        placeholder=''
                                        className=''
                                        value={tag.name}/>
                                        {tag.name}
                                </span>
                                    
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Author</label>
                        <div>
                            <input 
                                {...register('author')}
                                type="text"
                                placeholder='Author Name'
                                className='w-full p-2 rounded-md bg-gray-100' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Page Count</label>
                        <div>
                            <input 
                                {...register('page_count')}
                                type="number"
                                placeholder=''
                                className='p-2 rounded-md bg-gray-100' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <div>
                            <textarea 
                                {...register('description')}
                                type="textarea"
                                placeholder='Description about books'
                                className='w-full p-2 rounded-md bg-gray-100'
                                rows={8} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Cover Image</label>
                        <div>
                            <input 
                                {...register('cover_image')}
                                type="file"
                                placeholder=''
                                className='p-4 rounded-md bg-gray-100' />
                        </div>
                    </div>
                    <button 
                        className='w-full p-4 rounded-md border bg-cyan-400 hover:bg-cyan-600'>
                        Create Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;