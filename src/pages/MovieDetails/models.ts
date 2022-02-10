export interface DetailsResponse {
	title: string;
	budget: number;
	overview: string;
	release_date: string;
	vote_average: number;
	production_countries: { iso_3166_1: string, name: string }[];
	revenue: number;
}