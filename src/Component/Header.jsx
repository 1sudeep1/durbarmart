import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo from "../assets/images/logo.webp"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import "./header.scss"
import TrackOrder from '../Pages/TrackOrder'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import Details from '../Pages/Details'
import ParticularCat from './ParticularCat'
import NestedCategory from './NestedCategory'
import coma from "../assets/images/coma.svg"
import CatData from '../Datas/CatData'


function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filteredData = CatData.filter((item) => {
            const name = item.cattitle.toLowerCase();
            return name.includes(query.toLowerCase());
        })
        setSearchResults(filteredData);
    }
    const clearResults = () => {
        setSearchQuery('');
        setSearchResults([]);
    };
    const handleItemClick = (itemId) => {
        setSearchResults((prevResults) =>
            prevResults.filter((item) => item.id !== itemId)
        );
    };
    return (
        <>
            <header className='py-2 border-bottom'>
                <Container>
                    <Row>
                        <Col lg={2} md={2} sm={2}>
                            <Link to="/"> <img src={logo} className='logo' alt="" /></Link>
                        </Col>
                        <Col lg={5} md={5} className='offset-2'>
                            <Form className="d-flex formsearch">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2 fs"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={handleSearch}

                                />
                                <Button className='search' onClick={handleSearch}><i className="bi bi-search"></i></Button>
                            </Form>


                            <ul className="list-group ">
                                {searchResults.map((item) => (
                                    <Link to={`/nestedcat/${item.cattitle}`} style={{ textDecoration: 'none', color: 'black' }}><li className="list-group-item" key={item.id} onClick={() => handleItemClick(item.id)}> {item.cattitle}</li></Link>
                                ))}

                            </ul>
                            {searchResults.length > 0 && (
                                <button onClick={clearResults}>Clear Results</button>
                            )}
                        </Col>
                        <Col lg={3} md={3} className='icc'>
                            <ul className='d-flex gap-4 align-items-center justify-content-end'>
                                <div className="icon1">
                                    <li><Link to="" ><img className='coma' src={coma} alt="" /></Link></li>
                                    <span className='noti'>0</span>
                                    <p className='notiname'>compare</p>
                                </div>
                                <div className="icon1">
                                    <li><Link to="" ><i className="bi bi-heart fs-3" /></Link></li>
                                    <span className='noti'>0</span>
                                    <p className='notiname'>wishlist</p>
                                </div>
                                <div className="icon1">
                                    <li><Link to=""><i className="bi bi-cart fs-3" /></Link></li>
                                    <span className='noti'>0</span>
                                    <p className='notiname'>Cart</p>
                                </div>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/track_your_order' element={<TrackOrder />}></Route>
                <Route path='/users/login' element={<Login />}></Route>
                <Route path='/users/registration' element={<Registration />}></Route>
                <Route path='/details/:did' element={<Details />}></Route>
                <Route path='/particularcat/:pcid' element={<ParticularCat />}></Route>
                <Route path='/nestedcat/:cattitle' element={<NestedCategory />}></Route>
            </Routes>
        </>
    )
}


export default Header
