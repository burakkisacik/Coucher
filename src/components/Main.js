import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';

import Search from '../screens/Search';

const Main = () => {
    return (
        <div className='flex-1 flex flex-col'>
            <Route path='/Search'>
                <Search />
            </Route>
        </div>
    );
};

export default Main;
