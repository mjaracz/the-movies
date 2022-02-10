import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { Movie } from '../Movie';

test('renders movie__card element', () => {
	render(
		<BrowserRouter>
			<Movie movieId={123} title='mock title' overview='mock summary' />
		</BrowserRouter>
	);
	const movieCard = screen.getByTestId('movie__card');
	expect(movieCard).toBeInTheDocument();
});

test('renders movie__typographyBody1 element', () => {
	render(
		<BrowserRouter>
			<Movie movieId={123} title='mock title' overview='mock summary' />
		</BrowserRouter>
	);
	const typographyBody1 = screen.getByTestId('movie__typographyBody1');
	expect(typographyBody1).toBeInTheDocument();
});

test('renders movie__typographyBody2 element', () => {
	render(
		<BrowserRouter>
			<Movie movieId={123} title='mock title' overview='mock summary' />
		</BrowserRouter>
	);
	const typographyBody2 = screen.getByTestId('movie__typographyBody2');
	expect(typographyBody2).toBeInTheDocument();
});