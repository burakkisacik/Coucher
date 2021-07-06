import React from 'react';

const Profile = () => {
    return (
        <div className='flex justify-between items-center pr-10 text-gray-500'>
            <div className='neumorphPic'>
                <img src='/bkProfile.jpeg' className='w-16 h-16 rounded-full' />
            </div>
            <div className='neumorphProfileInfo'>
                <h1>Burak Kısacık</h1>
                <h1>Developer</h1>
            </div>
        </div>
    );
};

export default Profile;
