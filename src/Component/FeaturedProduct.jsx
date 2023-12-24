import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DiffProducts from '../Datas/DiffProducts';
import { Link } from 'react-router-dom';
import "./feature.scss"
// import "./slidercat.scss"
function Featuredproduct(props) {
    const options = {
        loop: true,
        center: false,
        // items: 3,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 3
          },
          976: {
            items: 4
          },
          1200: {
            items: 5
          }
        }
      };
    { var abc = DiffProducts.filter((a) => a.category == props.catheading) }
    return (
        <>
           
                <div className='border-bottom p-0 d-flex justify-content-between'>
                    <h3 className='border-bottom border-danger border-2 d-inline-block m-0 pb-2 text-capitalize'>{props.catheading}</h3>
                    <button className='btn btn-danger mb-2'><Link to={`/particularcat/${props.catheading}`} style={{color:'white'}}>View More</Link></button>
                </div>

                <div>
                    <OwlCarousel className='owl-theme oresp py-4' loop margin={10} {...options}>
                        {abc.map((a, i) => (
                            <div className='feature' key={i.id}>
                                <div className='item'>
                                    <Link to={`/details/${a.id}`}>   <img className='img-fluid' src={a.diffcatimage} alt="" /></Link>
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
            
        </>
    )
}

export default Featuredproduct
