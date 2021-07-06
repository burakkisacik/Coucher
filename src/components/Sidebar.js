import React, { useState } from 'react';
import Button from './Button';
import Profile from './Profile';
import {
    FaSearch,
    FaTv,
    FaGrinStars,
    FaListUl,
    FaShippingFast,
    FaRandom,
    FaTheaterMasks,
} from 'react-icons/fa';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState('Search');

    const handleClick = (name) => {
        setActiveButton(name);
    };

    return (
        <div className='w-72 h-screen sticky top-0 flex flex-col justify-between pb-16'>
            <div>
                <div className='flex justify-center w-52 mt-4'>
                    <FaTheaterMasks className='w-11 h-11 text-gray-500' />
                </div>
                <Button
                    name={'Recommendations'}
                    icon={<FaRandom />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
                <Button
                    name={'Search'}
                    icon={<FaSearch />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
                <Button
                    name={'Watched'}
                    icon={<FaTv />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
                <Button
                    name={'Favorites'}
                    icon={<FaGrinStars />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
                <Button
                    name={'Lists'}
                    icon={<FaListUl />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
                <Button
                    name={'Coming Soon'}
                    icon={<FaShippingFast />}
                    onButtonClick={handleClick}
                    active={activeButton}
                />
            </div>
            <Profile />
        </div>
    );
};

export default Sidebar;
