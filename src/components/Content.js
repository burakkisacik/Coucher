import React from 'react';
import MovieCard from './MovieCard';

const Content = (props) => {
    console.log(props.movies);
    return (
        <div className='flex-1 flex flex-wrap  px-10 '>
            {props.movies &&
                props.movies.map((item) => {
                    return <MovieCard key={item.Title} movieInfo={item} />;
                })}
        </div>
    );
};

export default Content;
