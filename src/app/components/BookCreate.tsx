import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate: React.FC = () => {
  const { createBook }: IBooksContext = useBooksContext();
    const [title, setTitle] = useState("");
    const habdleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }
    const habdleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        createBook(title)
        setTitle('')
    }
  return (
    <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
        <form onSubmit={habdleSubmit} className='flex flex-row my-4 items-center'>
            <label>Title</label>
            <input className='rounded-full p-2 text-slate-800' value={title} onChange={habdleChange}></input>
            {/* <button className=''>Submit!</button> */}
            <button className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>Submit!
           </button>
        </form>
    </div>
  )
}
export default BookCreate