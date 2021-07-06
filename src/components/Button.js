import React from 'react';

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
            <div>{props.name}</div>
            <div>{props.icon}</div>
        </div>
    );
};

export default Button;
