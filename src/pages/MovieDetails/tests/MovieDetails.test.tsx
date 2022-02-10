import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MovieDetails } from '../MovieDetails';

test('renders circularProgress element', () => {
	render(
		<BrowserRouter>
			<MovieDetails/>
		</BrowserRouter>
	)
	const circularProgress = screen.getByTestId('circularProgress');
	expect(circularProgress).toBeInTheDocument();
});