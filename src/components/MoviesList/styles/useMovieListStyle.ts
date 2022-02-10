import { makeStyles } from '@mui/styles';

export const useMovieListStyle = makeStyles({
	movesList: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	moviesList__title: {
		color: (props: { titleColor: string }) => props.titleColor,
		fontSize: 32,
		fontFamily: 'Ubuntu, sans-serif',
		fontWeight: 400,
		margin: '40px 0'
	},
	moviesList__circularProgress: {
		margin: '40px 0'
	}
})