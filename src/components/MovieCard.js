import React from 'react';

const MovieCard = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='neumorphCard'>
                <img
                    src={`${props.movieInfo.Poster}`}
                    className='movieCardImages'
                ></img>
            </div>
            <p className='mt-4 text-gray-500'>{props.movieInfo.Title}</p>
        </div>
    );
};

export default MovieCard;
