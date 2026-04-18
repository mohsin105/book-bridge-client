import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';
import { useNavigate } from 'react-router';
import SuccessAlert from '../components/SuccessAlert';
import FieldErrorAlert from '../components/FieldErrorAlert';

const AddBook = () => {
    const {register, handleSubmit, formState:{errors,isSubmitting, isSubmitSuccessful}} = useForm();
    const [categories, setCategories] = useState([]); //null instead of [] causes error
    const [tags, setTags] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [images, setImages] = useState([]);
    const [successMessage , setSuccessMessage] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        apiClient.get('categories/')
        .then(data =>{
            // console.log(data.data);
            setCategories(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    useEffect(()=>{
        apiClient.get('tags/')
        .then(data=>{
            // console.log(data.data);
            setTags(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    const handleImageChange = (e)=>{
        const files = Array.from(e.target.files);
        console.log((files));
        setImages(files);
        // files.map(file => console.log(URL.createObjectURL(file)));
        setPreviewImages(files.map(file => URL.createObjectURL(file)));
    };
    const onSubmit = async(data)=>{
        console.log(data);
        const formdata = new FormData();
        formdata.append('title', data.title);
        formdata.append('category', data.category);
        // console.log(data.tags);
        
        // formdata.append('tags', data.tags);
        data.tags.map(tagId =>{
            formdata.append('tags', Number(tagId));
        })
        formdata.append('author', data.author);
        formdata.append('page_count', data.page_count);
        formdata.append('description', data.description);
        if(data.cover_image && data.cover_image.length>0){
            formdata.append('cover_image', data.cover_image[0]);
        }
        console.log(formdata);
        // console.log(formdata.tags);
        
        
        // for(let key of data){
        //     if(key === 'cover_image'){
        //         formdata.append(key, data[key][0]);
        //     }
        //     else{
        //         formdata.append(key, data[key]);
        //     }
        // }
        // if(images.length>0)
        // {
        //     for(const image of images){
        //         const formdata = new FormData();
        //         formdata.append('cover_image', image);
        //         console.log(formdata);
                
        //     }
        // }
        try {
            const response = await authApiClient.post('books/',formdata,{
                headers:{
                    "Content-Type":'multipart/form-data',
                }
            });
            console.log(response);
            if(response.status === 201){
                setSuccessMessage('Book Created Successfully. Taking To Details Page...');
                setTimeout(()=> navigate(`/book/${response.data.id}`, 5000));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-11/12 md:w-1/2 mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-8'>Book Create Page</h1>
            <div>
                {successMessage && (
                    <SuccessAlert message={successMessage} />
                )}
            </div>
            <div className='p-4 mb-8'>
                <form 
                    action="" 
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4'
                    encType='multipart/form-data'>
                    <div>
                        <label htmlFor="">Title</label>
                        <div>
                            <input 
                                {...register('title',{
                                    required:"Title is required!"
                                })}
                                type="text"
                                placeholder='Book Title'
                                className='w-full p-2 rounded-md bg-gray-100' />
                                {errors?.title && <FieldErrorAlert message={errors.title.message}/>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <div>
                            <select 
                                {...register('category',{
                                    required:"Select A Category!"
                                })}
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
                            {errors.category && (<FieldErrorAlert message={errors.category.message}/>)}
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
                                        {...register('tags',{
                                            required:'Put some Tag to the Book',
                                        })}
                                        
                                        type="checkbox"
                                        placeholder=''
                                        className=''
                                        value={tag.id}/>
                                        {tag.name}
                                </span>
                            ))}
                            {errors.tags && (<FieldErrorAlert message={errors.tags.message}/>)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Author</label>
                        <div>
                            <input 
                                {...register('author',{
                                    required:"Author Name is required"
                                })}
                                type="text"
                                placeholder='Author Name'
                                className='w-full p-2 rounded-md bg-gray-100' />
                                {errors.author && (<FieldErrorAlert message={errors.author.message} />)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Page Count</label>
                        <div>
                            <input 
                                {...register('page_count',{
                                    required:"How many pages does this book have?"
                                })}
                                type="number"
                                placeholder=''
                                className='p-2 rounded-md bg-gray-100' />
                                {errors.page_count && (<FieldErrorAlert message={errors.page_count.message} />)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <div>
                            <textarea 
                                {...register('description',{
                                    required:"Provide some description to the book"
                                })}
                                type="textarea"
                                placeholder='Description about books'
                                className='w-full p-2 rounded-md bg-gray-100'
                                rows={8} />
                                {errors.description && (<FieldErrorAlert message={errors.description.message}/>)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Cover Image</label>
                        <div>
                            <input 
                                {...register('cover_image')}
                                type="file"
                                placeholder=''
                                accept='image/*'
                                onChange={handleImageChange}
                                className='p-4 rounded-md bg-gray-100' />
                        </div>
                        <div>
                            {previewImages.length>0 &&  (
                                <div className='size-48 flex   gap-2'>
                                    {previewImages.map((src,i)=>(
                                        <img 
                                            src={src} 
                                            alt="cover_photo"
                                            key={i}
                                            className='rounded' />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button 
                        type='submit'
                        disabled={isSubmitting || isSubmitSuccessful}
                        className='w-full p-4 text-lg font-semibold rounded-md border bg-cyan-400 hover:bg-cyan-600'>
                        {isSubmitting?'Submitting...' :isSubmitSuccessful? 'Submitted' : 'Create Book'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;