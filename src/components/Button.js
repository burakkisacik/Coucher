import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const isActive = props.active === props.name;

    return (
        <div
            className={`${
                isActive ? 'neumorphButtonActive' : 'neumorphButton'
            } mt-5  text-gray-500`}
            onClick={() => {
                props.onButtonClick(props.name);
            }}
        >
            <Link
                to={`${props.name}`}
                className='w-full h-full p-3 flex justify-between items-center'
            >
                <div>{props.name}</div>
                <div>{props.icon}</div>
            </Link>
        </div>
    );
};

export default Button;
