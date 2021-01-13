import React from 'react'
import { Typography, Layout, Button, Row, Col, Image } from "antd"
import { LeftOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { API_KEY, BASE_URL, POSTER_PATH } from "../store";
import { IDetailMovieApi } from "../types"
import { formatMoney } from "../constants/utils"

interface IdDetailMovie {
    id: string
}
const DetailMovie = () => {
    const [detailMovie, setDetailMovie] = React.useState<IDetailMovieApi>()
    const { id } = useParams<IdDetailMovie>();

    const fetchMovie = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            setDetailMovie(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        fetchMovie()
    }, [])
    return (
        <Layout className="container" style={{ backgroundColor: "#222" }}>
            <Typography.Title level={3} style={{ textAlign: 'center', marginTop: 10, color: "#fff" }} >Movie Catalogue</Typography.Title>
            <Link to="/"><Button type="primary" shape="round" icon={<LeftOutlined />}>Back Movie</Button></Link>
            <Layout.Content style={{ marginTop: 20 }}>
                <Row>
                    <Col>
                        <Image src={`${POSTER_PATH}/${detailMovie?.poster_path}`} alt={detailMovie?.original_title} style={{ width: 350 }} />
                    </Col>
                    <Col style={{ padding: "10px 20px", width: "500px" }}>
                        <Typography.Title level={4} style={{ color: "#fff" }}>{detailMovie?.original_title}</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Release Date: {detailMovie?.release_date}</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Runtime: {detailMovie?.runtime} min</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Vote Average: {detailMovie?.vote_average} / 10</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Total Votes: {detailMovie?.vote_count}</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Budget: {detailMovie?.budget === 0 ? <Typography.Text style={{ color: "#fff" }}>-</Typography.Text> : <Typography.Text style={{ color: "#fff" }}> $ {formatMoney(detailMovie?.budget)} </Typography.Text >} </Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Overview:</Typography.Title>
                        <Typography.Text style={{ color: "#fff" }}>{detailMovie?.overview}</Typography.Text>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Production Company: {detailMovie?.production_companies[0] == null && <Typography.Text style={{ color: "#fff" }}>-</Typography.Text>}</Typography.Title>
                        <Row gutter={[16, 16]}>
                            {detailMovie?.production_companies.map(item => (
                                <Col>
                                    {item.logo_path == null ? <Typography.Title level={4} style={{ backgroundColor: "#fff", padding: "0 5px" }}>{item.name}</Typography.Title> : <Image preview={false} src={`${POSTER_PATH}/${item.logo_path}`} alt={item.name} style={{ width: 150, height: 150, backgroundColor: "#fff" }} />}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

            </Layout.Content>
        </Layout>
    )
}

export default DetailMovie
