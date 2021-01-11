import React from "react"
import { Typography, Input, Layout, Image, Row, Col } from "antd"
import { InfoCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import { API_KEY, BASE_URL, POSTER_PATH } from "../store";
export interface IDataApi {
    id: number,
    backdrop_path: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
}
export interface IMovieListData {
    results: IDataApi[]
}

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
                    <Row justify="space-between" align="middle" style={{ backgroundColor: "#323232", marginTop: 18 }} key={item.id}>
                        <Col>
                            <Row align="middle">
                                <Col style={{ paddingTop: 5 }}>
                                    <Image style={{ width: 200, height: 125 }} src={`${POSTER_PATH}/${item.backdrop_path}`} preview={false} />
                                </Col>
                                <Col style={{ paddingLeft: 10 }}>
                                    <Typography.Title level={4} style={{ color: "#fff" }}>{item.original_title}</Typography.Title>
                                    <Typography.Text strong style={{ color: "#fff" }}>Release Date: {item.release_date}</Typography.Text>
                                    <br />
                                    <Typography.Text strong style={{ color: "#fff" }}>Vote Average: {item.vote_average}</Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ paddingRight: 10 }}>
                            <Row align="middle">
                                <Col><InfoCircleOutlined style={{ fontSize: 20, paddingRight: 5, color: "#fff" }} /></Col>
                                <Col><Typography.Title level={5} style={{ color: "#fff" }}>MORE INFO</Typography.Title></Col>
                            </Row>
                        </Col>
                    </Row>
                ))}

            </Layout.Content>
        </Layout>
    )
}

export default Movie
