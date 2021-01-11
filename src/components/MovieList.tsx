import React from "react"
import { Typography, Image, Row, Col } from "antd"
import { InfoCircleOutlined } from '@ant-design/icons';
import { POSTER_PATH } from "../store";
import { IDataApi } from "../types"

const MovieList = (item: IDataApi) => {
    return (
        <Row justify="space-between" align="middle" style={{ backgroundColor: "#323232", marginTop: 18 }}>
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
    )
}

export default MovieList
