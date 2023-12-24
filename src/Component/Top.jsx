import React from 'react'
import { Link } from 'react-router-dom'
import "./top.scss"
function Top() {
    return (
        <>
            <section className='top text-light pt-2'>
                <div className="container">
                    
                        <ul className='d-flex justify-content-end gap-3 pb-2'>
                            <li><Link to="/track_your_order" style={{ textDecoration: 'none', color: 'white' }}>Track Order</Link></li>
                            <li><Link to="/users/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
                            <li><Link to="/users/registration" style={{ textDecoration: 'none', color: 'white' }}>Registration</Link></li>
                        </ul>
                   
                </div>
            </section>
        </>
    )
}

export default Top
