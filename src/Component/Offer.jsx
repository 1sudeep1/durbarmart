import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OfferData from '../Datas/OfferData'
import "./offer.scss"
function Offer(props) {
    { var abc = OfferData.filter((a) => a.name == props.title) }
    return (
        <>
            <Container>
                <Row>
                    {abc.map((b) => (
                        <Col lg={4} sm={12} md={12}>
                            <div className="box">
                                <img className='offimg w-100 img-fluid' src={b.offerimg} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    )
}

export default Offer
