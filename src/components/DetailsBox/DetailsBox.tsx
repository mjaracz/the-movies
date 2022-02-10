import React, { FC } from 'react';
import { Typography } from '@mui/material';

import { useDetailsBoxStyle } from './useDetailsBoxStyle';

export interface DetailsBoxProps {
	title: string;
	budget: number;
	summary: string;
	voteAverage: number;
	productionCountry: string;
	releaseDate: string;
	revenue: number;
}

export const DetailsBox: FC<DetailsBoxProps> = (props) => {
	const detailsBoxStyle = useDetailsBoxStyle();
	return (
		<div data-testid='detailsBox' className={detailsBoxStyle.detailsBox}>
			<div data-testid='detailsBox__typography' className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					{props.title}
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					budget:
				</Typography>
				<Typography variant="body2">
					{props.budget} $
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					revenue:
				</Typography>
				<Typography variant="body2">
					{props.revenue} $
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					vote average:
				</Typography>
				<Typography variant="body2">
					{props.voteAverage} points
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					release date:
				</Typography>
				<Typography variant="body2">
					{props.releaseDate}
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					main production country:
				</Typography>
				<Typography variant="body2">
					{props.productionCountry}
				</Typography>
			</div>
			<div className={detailsBoxStyle.detailsBox__subBox}>
				<Typography variant="body1">
					overview summary:
				</Typography>
				<Typography variant="body2">
					{props.summary}
				</Typography>
			</div>
		</div>
	)
}