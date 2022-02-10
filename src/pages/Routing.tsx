import React, { FC } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './Home';
import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';

export const Routing: FC = () => {
	return (
		<Router>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Movies />} path="/movies" />
				<Route element={<MovieDetails />} path="/movie-details/:id" />
			</Routes>
		</Router>
	)
}