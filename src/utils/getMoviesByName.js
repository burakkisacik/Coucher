const getMoviesByName = async (name) => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=76f0778e&s=${name}&type=movie`
    );

    if (response.status !== 200) {
        throw new Error('something went wrong');
    }
    const data = await response.json();

    const foundedMovies = data.Search;

    return foundedMovies;
};

export { getMoviesByName };
