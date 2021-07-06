import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const Container = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto flex'>
            <Sidebar />
            <Main />
        </div>
    );
};

export default Container;
