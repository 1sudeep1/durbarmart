import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DiffProducts from '../Datas/DiffProducts';
// import "../Component/feature.scss"
import "./details.scss"
function Details() {
    let { did } = useParams();
    { var abc = DiffProducts.find((a) => a.id == did) }
    { var def = DiffProducts.filter((d) => (d.category == abc.category)) }
    return (
        <>
            <div className="container">

                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className='w-75 img-fluid' src={abc.diffcatimage} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <h2>{abc.title}</h2>
                        <ul className='d-flex gap-1 justify-content-start star'>
                            <li><i class="bi bi-star"></i></li>
                            <li><i class="bi bi-star"></i></li>
                            <li><i class="bi bi-star"></i></li>
                            <li><i class="bi bi-star"></i></li>
                            <li><i class="bi bi-star"></i></li>
                            <li>(0 reviews)</li>
                        </ul>
                        <p>Price: {abc.price}</p>
                        <span className='d-flex gap-2'>
                            <button className='btn btn-danger'>Buy Now</button>
                            <button className='btn btn-primary'>Add to Cart</button>
                        </span>
                    </div>

                </div>

                <div className="row my-3">
                    <h2 className='rp'>Related Products</h2>
                    {def.slice(0, 4).map((e) => (

                        <div className="col-lg-3 col-sm-12 col-md-3 my-2">
                            <div className="bo shadow text-center">
                                <img className='relatedimg' src={e.diffcatimage} alt="" />
                                <h5 className='py-2'><Link to={`/details/${e.id}`} style={{color:'black'}}>{e.title}</Link></h5>
                                <p><Link to={`/details/${e.id}`} style={{color:'black'}}>{e.price}</Link></p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Details
