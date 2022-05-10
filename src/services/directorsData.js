
function getDirectors () {
    return fetch("https://owen-wilson-wow-api.herokuapp.com/wows/directors")
    .then((response) => response.json());
}

export default getDirectors;