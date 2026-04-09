import React from 'react';

const FilterSearchBooks = ({setFilterVal,setSearchVal, categories,setOrderVal}) => {

    return (
        <div>
            <div className='my-4 space-x-4 w-11/12 sm:w-3/5 mx-auto'>
                <input 
                    type="text"
                    placeholder='Search by Book or Author'
                    onChange={(e)=> setSearchVal(e.target.value)}
                    className='w-4/5 p-4 rounded-2xl bg-emerald-50'
                     />
                <button className='p-4 rounded-2xl bg-emerald-200 hover:bg-emerald-300 text-base'>
                    Search
                </button>
            </div>
            <div className=' w-11/12 mx-auto flex justify-between'>
                <div className='space-x-4'>
                    <label htmlFor="">Filter By Category</label>
                    <select 
                        className='p-4 rounded-md bg-gray-50'
                        onChange={(e)=> setFilterVal(e.target.value)}>
                        <option value="">Category</option>
                        {categories && categories.map(category =>(
                            <option 
                                key={category.id}
                                
                                value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='space-x-4'>
                    <label htmlFor="">Sort By</label>
                    <select
                        onChange={(e)=> setOrderVal(e.target.value)} 
                        className='p-4 rounded-md bg-gray-50'>
                        <option value="-created_at">Newest</option>
                        <option value="created_at">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSearchBooks;