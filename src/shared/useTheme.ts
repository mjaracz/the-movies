import { useState, createContext } from 'react';
import { createTheme } from '@mui/material';

export const useTheme = () => {
	const muiTheme = createTheme({
		palette: {
			background: {
				default: 'rgba(10, 25, 41)',
				paper: 'rgb(0, 30, 60)'
			},
			primary: {
				main: 'rgb(102, 178, 255)'
			},
			secondary: {
				main: '#FF8E53'
			}
		},
		typography: {
			subtitle1: {
				fontSize: 18,
				color: '#FF8E53',
				fontWeight: 500,
				fontFamily: 'Ubuntu, sans-serif',
			},
			body1: {
				fontSize: 18,
				color: 'rgba(10, 25, 41)',
				fontWeight: 500,
				fontFamily: 'Ubuntu, sans-serif',
				overflowWrap: 'break-word',
				margin: '3px 0'
			},
			body2: {
				fontSize: 18,
				color: 'rgb(255, 255, 255)',
				fontWeight: 400,
				fontFamily: 'Ubuntu, sans-serif',
				overflowWrap: 'break-word',
				margin: '3px 0'
			},
		}
	});
	const [theme, setTheme] = useState(muiTheme);
	const ThemeContext = createContext({theme, setTheme});

	return {
		ThemeContext,
		muiTheme,
		theme,
		setTheme,
	}
}
