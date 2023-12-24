import React from 'react'
import "./trackorder.scss"
function TrackOrder() {
    return (
        <section className='trackorder'>
            <div className="container my-3">
                <h4>Track Order</h4>
                <div className="border p-3">
                    <h6>Order Info</h6>
                    <div className="row border p-3 bg-light">
                        <div className="col-lg-2 col-sm-3 col-md-3">
                            <p>Order Code *</p>
                        </div>
                        <div className="col-lg-10 col-sm-9 col-md-9">
                            <input className='w-100' type="text" placeholder='Order Code' />
                        </div>
                    </div>
                   
                </div>
                <button className='btn btn-danger tob'>Track Order</button>
            </div>
        </section>
    )
}

export default TrackOrder
