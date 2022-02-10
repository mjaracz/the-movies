import React, { ChangeEvent, FC, useContext } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { useTheme } from 'shared/useTheme';

import { useSearchBoxStyle } from './useSearchBoxStyle';

export interface SearchBoxProps {
	searchMovie: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: FC<SearchBoxProps> = (props) => {
	const {ThemeContext} = useTheme();
	const {theme} = useContext(ThemeContext)
	const searchBoxStyle = useSearchBoxStyle({
		secondaryColor: theme.palette.secondary.main,
		primaryColor: theme.palette.primary.main
	});

	return (
		<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
			<InputLabel data-testid='searchBox__label' className={searchBoxStyle.searchBox__label} htmlFor='textField'>Search Movie</InputLabel>
			<OutlinedInput
				data-testid='searchBox__input'
				className={searchBoxStyle.searchBox__textField}
				id='textField'
				color='secondary'
				onChange={props.searchMovie}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label='toggle password visibility'
							color='secondary'
							edge='end'
						>
							<SearchOutlined data-testid='searchBox__icon'/>
						</IconButton>
					</InputAdornment>
				}
				label="Search Movie"
			/>
		</FormControl>
	)
}