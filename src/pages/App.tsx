import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material';

import { Routing } from './Routing';
import { useTheme } from '../shared/useTheme';

export const App: FC = () => {
	const { muiTheme, ThemeContext, theme, setTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<ThemeProvider theme={muiTheme}>
				<Routing/>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}