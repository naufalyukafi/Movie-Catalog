export interface IDataApi {
    id: number,
    backdrop_path: string,
    original_title: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date: string,
    title?: string,
    vote_average: number,
    vote_count?: number
}

export interface IMovieListData {
    results: IDataApi[]
}