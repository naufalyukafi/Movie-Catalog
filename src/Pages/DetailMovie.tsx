import React from 'react'
import { Typography, Layout, Button, Row, Col, Image } from "antd"
import { LeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

const DetailMovie = () => {
    return (
        <Layout className="container" style={{ backgroundColor: "#222" }}>
            <Typography.Title level={3} style={{ textAlign: 'center', marginTop: 10, color: "#fff" }} >Movie Catalogue</Typography.Title>
            <Link to="/"><Button type="primary" shape="round" icon={<LeftOutlined />}>Back Movie</Button></Link>
            <Layout.Content style={{ marginTop: 20 }}>
                <Row>
                    <Col>
                        <Image src="https://image.tmdb.org/t/p/w400/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" alt="" />
                    </Col>
                    <Col style={{ padding: "10px 20px", width: "500px" }}>
                        <Typography.Title level={4} style={{ color: "#fff" }}>Wonder Woman 1984</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Runtime: 151 min</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Vote Average: 7.2 / 10</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Total Votes: 2,527</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Budget: $ 200,000,000</Typography.Title>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Overview:</Typography.Title>
                        <Typography.Text style={{ color: "#fff" }}>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.</Typography.Text>
                        <Typography.Title level={5} style={{ color: "#fff" }}>Production Company:</Typography.Title>
                        <Row align="middle" gutter={[16, 16]}>
                            <Col>
                                <Image src="https://image.tmdb.org/t/p/w200/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png" alt="" style={{ width: 150, height: 150, backgroundColor: "#fff" }} />
                            </Col>
                            <Col>
                                <Image src="https://image.tmdb.org/t/p/w200/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png" alt="" style={{ width: 150, height: 150, backgroundColor: "#fff" }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Layout.Content>
        </Layout>
    )
}

export default DetailMovie
