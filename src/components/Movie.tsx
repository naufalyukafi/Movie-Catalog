import React from "react"
import { Typography, Input, Layout } from "antd"
import axios from "axios";
import { API_KEY, BASE_URL } from "../store";
import { IMovieListData } from "../types"
import MovieList from "./MovieList"

const Movie = () => {
    const [movie, setMovie] = React.useState<IMovieListData>()
    const fetchMovie = async () => {
        try {
            const result = await axios(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
            setMovie(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        fetchMovie();
    }, [])
    return (
        <Layout className="container" style={{ backgroundColor: "#222" }}>
            <Typography.Title level={3} style={{ textAlign: 'center', marginTop: 10, color: "#fff" }} >Movie Catalogue</Typography.Title>
            <Input.Search allowClear enterButton placeholder="Search movie in here ..." />
            <Layout.Content>
                {movie?.results.map(item => (
                    <MovieList
                        key={item.id}
                        id={item.id}
                        backdrop_path={item.backdrop_path}
                        original_title={item.original_title}
                        release_date={item.release_date}
                        vote_average={item.vote_average}
                    />
                ))}

            </Layout.Content>
        </Layout>
    )
}

export default Movie
