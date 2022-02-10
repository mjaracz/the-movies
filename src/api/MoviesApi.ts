import { BaseApi } from './BaseApi';
import { ResponseMovie } from 'components/MoviesList/models';
import {DetailsResponse} from '../pages/MovieDetails/models';

export class MoviesApi extends BaseApi {
	async discoverMovies(): Promise<ResponseMovie[]> {
		return this.getMovies<{ results: ResponseMovie[] }>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}`)
			.then((data) => data.results)
	}
	async getMovieDetails(id: string): Promise<DetailsResponse> {
		return this.getMovies<DetailsResponse>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
	}
}