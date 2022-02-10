import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SearchBox } from '../SearchBox';

test('renders InputLabel element', () => {
	render(
		<BrowserRouter>
			<SearchBox searchMovie={jest.fn()}/>
		</BrowserRouter>
	);
	const searchBoxLabel = screen.getByTestId('searchBox__label');
	expect(searchBoxLabel).toBeInTheDocument();
});

test('renders input element', () => {
	render(
		<BrowserRouter>
			<SearchBox searchMovie={jest.fn()}/>
		</BrowserRouter>
	);
	const searchBoxInput = screen.getByTestId('searchBox__input');
	expect(searchBoxInput).toBeInTheDocument();
});

test('renders search icon', () => {
	render(
		<BrowserRouter>
			<SearchBox searchMovie={jest.fn()}/>
		</BrowserRouter>
	);
	const searchBoxIcon = screen.getByTestId('searchBox__icon');
	expect(searchBoxIcon).toBeInTheDocument();
});