const getMovieData = () => {
    return fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50")
    .then((response)=> response.json())
    .then((data) => {
        const cleanData = data.map((item, index)=> {
            return {
                movie: item.movie,
                year: item.year,
                director: item.director,
                fullLine: item.full_line,
                poster: item.poster,
                audio: item.audio,
                id: index,
            }
        });
        return cleanData;
    });
};

export default getMovieData;