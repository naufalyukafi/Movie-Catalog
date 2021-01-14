import React from "react"
import { Typography, Input, Layout, Spin, Col } from "antd"
import { Link } from "react-router-dom"
import { IMovieListData } from "../types"
import MovieList from "../components/MovieList"
import { useRequestMovie } from "../utils/APIUtils"

const Movie = () => {
    const [movie, setMovie] = React.useState<IMovieListData>();
    const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const { getAllMovie } = useRequestMovie()
    const fetchMovie = async () => {
        try {
            const result = await getAllMovie();
            setMovie(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        fetchMovie();
    }, [])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value)
    }

    const filteredData = movie?.results.filter(item => {
        return item.original_title.toLowerCase().includes(data.toLowerCase())
    })


    return (
        <Layout className="container" style={{ backgroundColor: "#222" }}>
            {loading ?
                <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
                    <Spin size="large" tip="Loading movie..." />
                </Col>
                : <>
                    <Typography.Title level={3} style={{ textAlign: 'center', marginTop: 10, color: "#fff" }} >Movie Catalogue</Typography.Title>
                    <Input.Search
                        allowClear
                        enterButton
                        placeholder="Search movie in here ..."
                        onChange={handleChange}
                        value={data}
                    />
                    <Layout.Content>
                        {data.length > 0 ?
                            filteredData?.map(item => (
                                <Link to={`/detail/${item.id}`}>
                                    <MovieList
                                        key={item.id}
                                        id={item.id}
                                        backdrop_path={item.backdrop_path}
                                        original_title={item.original_title}
                                        release_date={item.release_date}
                                        vote_average={item.vote_average}
                                    />
                                </Link>
                            )) : movie?.results.map(item => (
                                <Link to={`/detail/${item.id}`}>
                                    <MovieList
                                        key={item.id}
                                        id={item.id}
                                        backdrop_path={item.backdrop_path}
                                        original_title={item.original_title}
                                        release_date={item.release_date}
                                        vote_average={item.vote_average}
                                    />
                                </Link>
                            ))}

                    </Layout.Content> </>}
        </Layout>
    )
}

export default Movie
