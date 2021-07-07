import React from 'react';

const MovieCard = (props) => {
    return (
        <div className='neumorphCard'>
            <img
                src={`${props.movieInfo.Poster}`}
                className='movieCardImages'
            ></img>
        </div>
    );
};

export default MovieCard;
