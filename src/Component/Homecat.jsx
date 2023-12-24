import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import CatData from '../Datas/CatData'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./homecat.scss"
import Dropdown from 'react-bootstrap/Dropdown';
function Homecat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="light" onClick={handleShow} className='hambtn'>
                <span className='ham d-inline'><i className="bi bi-list"></i></span>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><i className="fs-1 text-dark border rounded-circle p-1 bg-light bi bi-person"></i>   <h4 className='mt-4 text-light border-top py-2'>Sign In | Registration</h4></Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {CatData.map((b) => (
                            <Dropdown.Item href="#/action-1">{b.cattitle}</Dropdown.Item>
       
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <li><Link to ="/" style={{color:'black'}}><i className="bi bi-house" /> Home</Link></li>
                    <li><Link to ="" style={{color:'black'}}><i className="bi bi-cart" /> Cart</Link></li>
                    <li><Link to ="" style={{color:'black'}} ><i className="bi bi-heart" /> Wishlist</Link></li>

                </Offcanvas.Body>
            </Offcanvas >
            <div className="col-lg-3 homecat">
                <div className="d-flex align-items-center gap-2">

                    <h4 className='catheading p-2'> <span className='d-inline'><i className="bi bi-list"></i></span>Categories</h4>
                </div>
                {CatData.map((a) => (
                    <ListGroup variant="flush">
                        <ListGroup.Item><Link to={`/nestedcat/${a.cattitle}`} style={{ textDecoration: 'none', color: 'black' }}><img width={20} src={a.catimg} /> {a.cattitle}</Link></ListGroup.Item>
                    </ListGroup>
                ))}

            </div>
        </>
    )
}

export default Homecat