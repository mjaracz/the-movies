import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTheme } from 'shared/useTheme';
import { MoviesApi } from 'api/MoviesApi';

import { ResponseMovie } from '../models';

export const useMoviesList = () => {
	const {ThemeContext} = useTheme();
	const {theme} = useContext(ThemeContext)
	const [movies, setMovies] = useState<ResponseMovie[]>([]);
	const [filterMovies, setFilterMovies] = useState<ResponseMovie[]>([]);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const searchMovie = useCallback((searchValueOrEvent: ChangeEvent<HTMLInputElement> | string) => {
		if (typeof searchValueOrEvent === 'object') {
			navigate(`/movies?search=${searchValueOrEvent.currentTarget.value}`)
			const filterMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchValueOrEvent.currentTarget.value.toLowerCase()));
			if (filterMovies.length && searchValueOrEvent.currentTarget.value !== '') {
				setFilterMovies(filterMovies);
			}
			if (searchValueOrEvent.currentTarget.value === '') {
				setFilterMovies(movies);
			}
		}
		if (typeof searchValueOrEvent === 'string') {
			const filterMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchValueOrEvent.toLowerCase()));
			if (filterMovies.length) {
				setFilterMovies(filterMovies);
			}
		}
	}, [movies, navigate])

	useEffect(() => {
		const moviesListApi = new MoviesApi();
		moviesListApi.discoverMovies().then(movies => {
			setMovies(movies);
			setFilterMovies(movies);
		})
	}, []);
	useEffect(() => {
		const searchValue = searchParams.get('search');
		if (searchValue) searchMovie(searchValue);
	}, [searchParams, searchMovie]);

	return {
		filterMovies,
		theme,
		searchMovie,
	}
}