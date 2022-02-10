export abstract class BaseApi {
	protected baseUrl: string = 'https://api.themoviedb.org/3';
	protected apiKey: string = '92b418e837b833be308bbfb1fb2aca1e';

	async getMovies<ResponseResults>(url: string) {
		return fetch(url)
			.then<ResponseResults>(res => res.json())
	}
}