import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Layout = (props) => (
    <Container>
        <Row className="justify-content-md-center">
            <Col lg='8' xs='12' md='12' span={{ span: true }}>
                {props.children}
            </Col>
        </Row>
    </Container>
)

export default Layout