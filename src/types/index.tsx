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

export interface IDetailMovieApi {
    id: number,
    backdrop_path: string,
    budget: number | undefined,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ICompaniesMovie[],
    vote_average: number,
    vote_count: number,
    runtime: number,
    release_date: string
}

export interface ICompaniesMovie {
    id: number,
    logo_path: string,
    name: string
}
