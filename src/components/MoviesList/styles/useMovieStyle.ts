import { makeStyles } from '@mui/styles';

export const useMovieStyle = makeStyles((theme) => ({
	movie__card: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		boxSizing: 'border-box',
		width: 377,
		height: 233,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: '40px 0 50px 0',
		paddingTop: '1rem',
		borderRadius: 5,
		overflow: 'hidden',
		cursor: 'pointer',
	},
	card__subBox: {
		textAlign: 'left',
		paddingLeft: '1rem',
		paddingTop: '1rem',
		paddingRight: '1rem',
		fontFamily: 'Ubuntu, sans-serif',
		fontWeight: 400,
		color: '#fff',
	},
	subBox__text: {
		textAlign: 'left',
		paddingLeft: '1rem',
		marginBottom: '0.5rem',
		overflow: 'hidden',
	}
}));
