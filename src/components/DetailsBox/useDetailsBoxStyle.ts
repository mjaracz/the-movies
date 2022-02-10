import { makeStyles } from '@mui/styles';

export const useDetailsBoxStyle = makeStyles({
	detailsBox: {
		background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
		height: 620,
		width: 610,
		display: 'flex',
		flexWrap: 'nowrap',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: '40px auto',
		paddingTop: '1rem',
		borderRadius: 5,
		overflow: 'hidden',
	},
	detailsBox__subBox: {
		maxWidth: 600,
		textAlign: 'center',
		paddingLeft: '1rem',
		paddingTop: '1rem',
		paddingRight: '1rem',
	}
})