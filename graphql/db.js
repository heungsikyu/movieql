import axios  from "axios";

const BASE_URL = "https://yts.lt/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json?`;


export const getMovies = async (limit, rating, sort_by) => {
    const{
        data:{
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL,{
        params: {
            limit, 
            minimum_rating: rating,
            sort_by: sort_by 
        }
    });
    return movies;
};


export const getMovieDetails = async (id) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id 
        }
    });
    return movie; 
};


export const getSuggestions = async ( id ) => {
    //console.log(MOVIE_SUGGESTIONS_URL);
    //console.log("id :"+ id);
    const {
        data: {
            data: { movies }  
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, { 
        params: {
            movie_id: id
        }
    });
    return movies;
};