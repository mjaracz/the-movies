import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { MoviesList } from '../MoviesList';

test('renders moviesList element', () => {
	render(
		<BrowserRouter>
			<MoviesList/>
		</BrowserRouter>
	);
	const moviesList = screen.getByTestId('moviesList');
	expect(moviesList).toBeInTheDocument();
});

test('renders moviesList title element', () => {
	render(
		<BrowserRouter>
			<MoviesList/>
		</BrowserRouter>
	);
	const moviesListTitle = screen.getByTestId('moviesList__title');
	expect(moviesListTitle).toBeInTheDocument();
});

test('renders circularProgress element', () => {
	render(
		<BrowserRouter>
			<MoviesList/>
		</BrowserRouter>
	);
	const circularProgress = screen.getByTestId('moviesList__circularProgress');
	expect(circularProgress).toBeInTheDocument();
});