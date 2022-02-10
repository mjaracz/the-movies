import { makeStyles } from '@mui/styles';

export interface SearchBoxStyleProps {
	secondaryColor: string;
	primaryColor: string;
}

export const useSearchBoxStyle = makeStyles({
	searchBox__textField: {
		'& > fieldset': {
			borderColor: (props: SearchBoxStyleProps) => props.secondaryColor,
		},
		'&:hover > fieldset': {
			borderColor: (props: SearchBoxStyleProps) => `${props.secondaryColor} !important`,
		},
		'& > input': {
			color: (props: SearchBoxStyleProps) => props.primaryColor,
			fontFamily: 'Ubuntu, sans-serif',
			fontWeight: 400,
		}
	},
	searchBox__label: {
		color: '#FF8E53 !important',
		fontFamily: 'Ubuntu, sans-serif',
		fontWeight: '400 !important'
	}
})