import React from 'react';

const Header = (props) => {
    return (
        <div className='h-16 flex items-center justify-center mt-12 mb-12'>
            <h1 className=' text-gray-500 text-3xl'>{props.text}</h1>
        </div>
    );
};

export default Header;
