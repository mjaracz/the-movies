import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Movies } from '../Movies';

test('renders MoviesList component', () => {
	render(
		<BrowserRouter>
			<Movies/>
		</BrowserRouter>
	);
	const moviesList = screen.getByTestId('moviesList--container');
	expect(moviesList).toBeInTheDocument();
});