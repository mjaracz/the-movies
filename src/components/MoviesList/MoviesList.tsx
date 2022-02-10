import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';

import { useMovieListStyle } from './styles/useMovieListStyle';
import { Movie } from './Movie';
import { SearchBox } from '../SearchBox';
import { useMoviesList } from './hooks/useMoviesList';

export const MoviesList: FC = () => {
	const { theme, filterMovies, searchMovie } = useMoviesList();
	const moviesListStyle = useMovieListStyle({ titleColor: theme.palette.secondary.main });

	return (
		<div data-testid='moviesList' className={moviesListStyle.movesList}>
			<div data-testid='moviesList__title' className={moviesListStyle.moviesList__title}>
				List of movies
			</div>
			<SearchBox searchMovie={searchMovie}/>
			{(filterMovies.length)
				 ? filterMovies.map((movie) => <Movie key={movie.id} movieId={movie.id} title={movie.title} overview={movie.overview} />)
				: <CircularProgress data-testid='moviesList__circularProgress' className={moviesListStyle.moviesList__circularProgress} size={120} color='primary'/>
			}
		</div>
	)
}