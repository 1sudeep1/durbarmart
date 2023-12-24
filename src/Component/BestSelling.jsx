import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import "./bestselling.scss";
import BestSellingdata from '../Datas/BestSellingData';
function BestSelling(props) {
    return (

        <>
            <div className='border-bottom p-0 d-flex justify-content-between'>
                <h3 className='border-bottom border-danger border-2 d-inline-block m-0 pb-2 text-capitalize'>{props.catheading}</h3>
                <button className='btn btn-danger mb-2'><Link to={`/particularcat/${props.catheading}`} style={{ color: 'white' }}>View More</Link></button>
            </div>
            <OwlCarousel className='owl-theme' loop margin={10} items={1} nav>

                <div className="row my-5 bestselling">
                    {BestSellingdata.map((a) => (

                        <div className="col-lg-4 bsp">
                            <div className="row border my-2">
                                <div className="col-lg-5 border">
                                    <img className='w-100' src={a.diffcatimage} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className='text-left'>
                                        <Link to="" style={{ color: 'black' }}><p className='my-2 ellipsis'>{a.title}</p></Link>
                                        <ul className='d-flex gap-1 justify-content-start star'>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                        <Link to="" style={{ color: 'black' }}>  <p>{a.price}</p></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="leftservices ls">
                                <ul>
                                    <li><Link to="" style={{ color: 'white' }}><i className="bi bi-heart" /></Link></li>
                                    <li><Link to="" style={{ color: 'white' }}><i className="bi bi-cart" /></Link></li>
                                    <li><Link to="" style={{ color: 'white' }}><i className="bi bi-eye" /></Link></li>
                                </ul>
                            </div>
                        </div>


                    ))}


                </div>


            </OwlCarousel>
        </>

    )
}

export default BestSelling

