import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesApi } from 'api/MoviesApi';
import { DetailsBox } from 'components/DetailsBox/DetailsBox';

import { DetailsResponse } from './models';
import { CircularProgress } from '@mui/material';

export const MovieDetails: FC = () => {
	const [movieDetails, setMovieDetails] = useState<DetailsResponse>();
	const params = useParams();
	useEffect(() => {
		const moviesApi = new MoviesApi();
		if (params.id) {
			moviesApi.getMovieDetails(params.id).then(movieDetails => {
				setMovieDetails(movieDetails);
			})
		}
	},[params.id])

	return (
		<div style={{ display: 'flex' }}>
			{movieDetails
				? <DetailsBox
						title={movieDetails.title}
						budget={movieDetails.budget}
						productionCountry={movieDetails.production_countries[0].name}
						releaseDate={movieDetails.release_date}
						summary={movieDetails.overview}
						voteAverage={movieDetails.vote_average}
						revenue={movieDetails.revenue}
				/>
				: <CircularProgress data-testid='circularProgress' style={{ margin: '40px auto' }} size={120} color='primary'/>
			}
		</div>
	)
}