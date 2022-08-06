import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        //* Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),

        //* Get Movies by [Type]
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {

                //* Get Movies by search
                if (searchQuery) {
                    return `search/movie?api_key=${tmdbApiKey}&query=${searchQuery}&page=${page}`;
                }

                //* Categories are in string, eg popular
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }

                //* Genres are in number, eg 28
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                
                //* Get popular movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

        //* Get Movie Details
        getMovie: builder.query({
            query: ( id ) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        }),

        //* Get user specific lists aka favourite and watchlist
        getList: builder.query({
            query: ({listName, accountId, sessionId, page}) => `account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
        }),

        //* Get user specific movie recommendations
        getRecommendations: builder.query({
            query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
        }),

        //* get actor details
        getActorDetails: builder.query({
            query: ( id ) => `person/${id}?api_key=${tmdbApiKey}`,
        }),

        getMoviesByActorId: builder.query({
            query: ({id, page}) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
        }),
    }),
});


export const {
    useGetGenresQuery,
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetListQuery,
    useGetRecommendationsQuery,
    useGetActorDetailsQuery,
    useGetMoviesByActorIdQuery,
} = tmdbApi;
