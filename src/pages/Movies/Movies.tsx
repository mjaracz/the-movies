import React, { FC } from 'react';
import { MoviesList } from 'components/MoviesList';

export const Movies: FC = () => {
	return (
		<div data-testid='moviesList--container'>
			<MoviesList />
		</div>
	)
}