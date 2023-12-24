import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DiffProducts from '../Datas/DiffProducts';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BestSellingdata from '../Datas/BestSellingData';
function ParticularCat() {
    let { pcid } = useParams();
    { var abc = DiffProducts.filter((a) => a.category == pcid) }
    { var abcd = BestSellingdata.filter((a) => a.category == pcid) }
    return (
        <>
            <div className="container my-3">
                <h3 className='border-bottom border-danger border-2 d-inline-block m-0 pb-2 text-capitalize'>{pcid}</h3>

                <div>
                    <OwlCarousel className='owl-theme oresp py-4' loop margin={10} items={5} nav>
                        {abc.map((a) => (
                            <div className='feature'>
                                <div className='item'>
                                    <Link to={`/details/${a.id}`}>   <img src={a.diffcatimage} alt="" /></Link>
                                </div>
                                <div className='text-left px-2'>
                                    <Link to={`/details/${a.id}`} style={{ color: 'black' }}>     <p className='my-2'>{a.title}</p></Link>
                                    <Link to={`/details/${a.id}`} style={{ color: 'black' }}>  <p>{a.price}</p></Link>
                                    <ul className='d-flex gap-1 justify-content-start star'>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                    </ul>
                                </div>
                                <div className="leftservices">
                                    <ul>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-heart" /></Link></li>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-cart" /></Link></li>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-eye" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        ))}




                    </OwlCarousel>
                </div>
            </div>
            <div className="container my-3">
                {/* <h3 className='border-bottom border-danger border-2 d-inline-block m-0 pb-2 text-capitalize'>{pcid}</h3> */}

                <div>
                    <OwlCarousel className='owl-theme oresp py-4' loop margin={10} items={5} nav>
                        {abcd.map((a) => (
                            <div className='feature'>
                                <div className='item'>
                                    <Link to={`/details/${a.id}`}>   <img src={a.diffcatimage} alt="" /></Link>
                                </div>
                                <div className='text-left px-2'>
                                    <Link to={`/details/${a.id}`} style={{ color: 'black' }}>     <p className='my-2'>{a.title}</p></Link>
                                    <Link to={`/details/${a.id}`} style={{ color: 'black' }}>  <p>{a.price}</p></Link>
                                    <ul className='d-flex gap-1 justify-content-start star'>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                    </ul>
                                </div>
                                <div className="leftservices">
                                    <ul>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-heart" /></Link></li>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-cart" /></Link></li>
                                        <li><Link to="" style={{ color: 'white' }}><i className="bi bi-eye" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        ))}




                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default ParticularCat
