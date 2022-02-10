import React, { useCallback } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useMovieStyle } from './styles/useMovieStyle';

interface Props {
	title: string;
	overview: string;
	movieId: number;
}

export function Movie(props: Props) {
	const styles = useMovieStyle();
	const navigate = useNavigate();
	const goToMovieDetails = useCallback(() => {
		navigate(`/movie-details/${props.movieId}`)
	}, [navigate, props])

	return (
		<div data-testid='movie__card' className={styles.movie__card} onClick={goToMovieDetails}>
			<div className={styles.card__subBox}>
				<Typography data-testid='movie__typographyBody1' variant='body1' className={styles.subBox__text}>
					title
				</Typography>
				<Typography data-testid='movie__typographyBody2' variant='body2' className={styles.subBox__text}>
					{props.title}
				</Typography>
			</div>
			<div className={styles.card__subBox}>
				<Typography variant='body1' className={styles.subBox__text}>
					movie overview
				</Typography>
				<Typography variant='body2' className={styles.subBox__text}>
					{props.overview}
				</Typography>
			</div>
		</div>
	)
}