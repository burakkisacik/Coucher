import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = (props) => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(userInput);
        setUserInput((prev) => {
            return '';
        });
    };

    const handleInputChange = (e) => {
        setUserInput((prev) => {
            return e.target.value;
        });
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='searchInputField'>
                <FaSearch className='text-gray-500' />
                <form className='w-full' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Search for movies...'
                        className='bg-transparent outline-none w-full h-5/6 pl-3'
                        value={userInput}
                        onChange={handleInputChange}
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default SearchInput;
