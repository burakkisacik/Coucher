import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { getMoviesByName } from '../utils/getMoviesByName';
import Content from '../components/Content';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            fetch(
                `http://www.omdbapi.com/?apikey=76f0778e&s=${searchTerm}&type=movie`
            )
                .then((response) => response.json())
                .then((data) => {
                    setSearchResult((prev) => {
                        return data.Search;
                    });
                });
        }
    }, [searchTerm]);

    const handleOnSearch = (searchText) => {
        setSearchTerm((prev) => {
            return searchText;
        });
    };

    return (
        <div>
            <SearchInput onSearch={handleOnSearch} />
            <Content movies={searchResult} />
        </div>
    );
};

export default Search;
