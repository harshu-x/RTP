import React from 'react'
import { useState } from 'react';
const SearchBar = () => {


    const [text, setText] = useState(' ');

    const submitHandler = (e) =>{
        e.preventDefault();
         console.log('form is submiited')
    }
  return (
    <div>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex bg-gray-800 gap-5 p-10'>
        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value);
        }}
        required
        className=' w-full border-2 px-4 py-2 text-xl rounded outline-none'
         type='text' placeholder='Search anything...'/>

        <button
         className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Click Me!..</button>
      </form>
    </div>
  )
}

export default SearchBar
