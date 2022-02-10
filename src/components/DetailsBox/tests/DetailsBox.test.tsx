import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DetailsBox } from '../DetailsBox';

test('renders detailsBox container', () => {
	render(
		<BrowserRouter>
			<DetailsBox
				voteAverage={3.2}
				summary=''
				releaseDate=''
				productionCountry=''
				budget={1}
				title=''
				revenue={2}
			/>
		</BrowserRouter>
	);
	const detailsBox = screen.getByTestId('detailsBox');
	expect(detailsBox).toBeInTheDocument();
});

test('renders typography element', () => {
	render(
		<BrowserRouter>
			<DetailsBox
				voteAverage={3.2}
				summary=''
				releaseDate=''
				productionCountry=''
				budget={1}
				title=''
				revenue={2}
			/>
		</BrowserRouter>
	);
	const typography = screen.getByTestId('detailsBox__typography');
	expect(typography).toBeInTheDocument();
});