import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.webp"
import "./footer.scss"

function Footer() {
    return (
        <>
            <footer>
                <Container className='py-5'>
                    <Row>
                        <Col lg={2} sm={12} md={4} className='offset-lg-0 offset-md-1'>
                            <ul className='lh-base'>
                                <li className='my-3'><Link to="/"> <img src={logo} className='w-100' alt="" /></Link></li>
                                <li>Online Shopping In Nepal - Durbarmart.com</li>
                                <li><span className="text-light">Address:</span>
                                    <br></br>Kalanki, kathmandu</li>
                                <li><span className="text-light">Phone: </span> 9863667252</li>
                                <li className='text-light'>Email:
                                    info@durbarmart.com</li>
                                <li className='d-flex gap-2 text-light fsicon mt-2'>
                                    <Link to="https://www.facebook.com/durbarmart"><i className="bi bi-facebook icc"></i></Link>
                                    <Link to="https://www.instagram.com/durbarmart/"><i className="bi bi-instagram icc"></i></Link>
                                    <Link to="https://twitter.com/durbarmart"><i className="bi bi-twitter icc"></i></Link>
                                    <Link to="https://www.youtube.com/durbarmart0"><i className="bi bi-youtube icc"></i></Link>
                                    <Link to="https://plus.google.com/"><i className="bi bi-google icc"></i></Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} sm={12} md={4} className='offset-lg-1 offset-md-2'>
                            <ul className='lh-base '>
                                <li className='my-3 fw-bold text-light'>USEFUL LINK</li>
                                <li><Link to="" style={{ color: 'black' }}>Become a vendor</Link></li>
                                <li><Link to="" style={{ color: 'black' }}>Warranty</Link></li>
                                <li><Link to="" style={{ color: 'black' }}>Full Refund</Link></li>
                                <li><Link to="" style={{ color: 'black' }}>Referral</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} sm={12} md={4} className='offset-lg-1 offset-md-1'>
                            <ul className='lh-base '>
                                <li className='my-3 fw-bold text-light'>MY ACCOUNT</li>
                                <li><Link to="/users/login" style={{ color: 'black' }}>Login</Link></li>
                                <li><Link to="" style={{ color: 'black' }}>Order History</Link></li>
                                <li><Link to="" style={{ color: 'black' }}>My Wishlist</Link></li>
                                <li><Link to="/track_your_order" style={{ color: 'black' }}>Track Order</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} sm={12} md={4} className='offset-lg-1 offset-md-2 '>
                            <ul className='lh-base '>
                                <li className='my-3 fw-bold text-light'>NEWS LETTER</li>

                                <form action="">
                                    <input style={{ minWidth: '200px' }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address' />
                                    <button type="submit" className="btn btn-danger mt-3">Subscribe</button>
                                </form>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </footer>
            <section className='f1 text-light'>
                <Container className='pt-4'>
                    <Row>
                        <Col lg={6}>
                            <p>© 2023 Online Shopping in Nepal | Online shopping Nepal | Durbarmart.com Terms Privacy policy Seller policy Return policy Support policy</p>
                        </Col>

                        <Col lg={2} className='offset-4 d-flex  gap-3'>
                            <img className='payment w-100' src="./images/footer_img/esewa_og.webp" alt="" />
                            <img className='payment bg-light' src="./images/footer_img/logo1.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer
