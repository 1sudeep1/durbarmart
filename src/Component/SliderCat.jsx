import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CatData from '../Datas/CatData';
import "./slidercat.scss"
import { Link } from 'react-router-dom';
function SliderCat() {
    const options1 = {
        loop: false,
        center: false,
        items: 3,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 3
          },
          976: {
            items: 4
          },
          1200: {
            items: 6
          }
        }
      };
    return (
        <>
            <OwlCarousel className='owl-theme cs' loop margin={4} items={4} autoplay nav {...options1}>
                {CatData.map((a) => (
                    <Link to={`/nestedcat/${a.cattitle}`} style={{color:'black'}}>  <div>
                        <div class='item catslider'>
                            <img className='img-fluid w-100' width={10} src={a.catimg} alt="" />
                        </div>
                        <p className='text-center my-2'>{a.cattitle}</p>
                    </div>
                    </Link>

                ))}

            </OwlCarousel>
        </>
    )
}

export default SliderCat
