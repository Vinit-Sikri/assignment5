// API service for Musicify using Redux Toolkit Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicifyApi = createApi({
  reducerPath: 'musicifyApi', // Changed name for uniqueness
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchTopCharts: builder.query({ query: () => '/v1/charts/world' }),
    fetchSongsByGenre: builder.query({ query: (genre) => `/v1/charts/genre-world?genre_code=${genre.toUpperCase()}` }),
    fetchSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}` }),
    searchSongs: builder.query({ query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    fetchArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
    fetchSongDetails: builder.query({ query: ({ songid }) => `/v1/tracks/details?track_id=${songid}` }),
    fetchSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}` }),
  }),
});

// Exporting custom hooks for each endpoint
export const {
  useFetchTopChartsQuery,
  useFetchSongsByGenreQuery,
  useFetchSongsByCountryQuery,
  useSearchSongsQuery,
  useFetchArtistDetailsQuery,
  useFetchSongDetailsQuery,
  useFetchSongRelatedQuery,
} = musicifyApi;
