const getMovieData = () => {
    return fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
    .then((response)=> response.json())
    .then((data) => {
        const cleanData = data
        .sort((a, b)=>{return a.movie > b.movie ? 1 : -1})
        .map((item, index)=> {
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