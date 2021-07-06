import React from 'react';

import Header from './Header';
import Content from './Content';

const Main = () => {
    return (
        <div className='flex-1 flex flex-col'>
            <Header />
            <Content />
        </div>
    );
};

export default Main;
