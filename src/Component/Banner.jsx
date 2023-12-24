import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SlideData from '../Datas/SlideData';
import "./banner.scss"
function Banner() {

    return (
        <>
            <div className="slider col-sm-12 col-md-12 col-lg-8 offset-lg-1">
                <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay>
                    {SlideData.map((b) => (
                        <div class='item'>
                            <img className='img-fluid w-100' src={b.slideimg} alt="" />
                        </div>
                    ))}

                </OwlCarousel>
            </div>
        </>
    )
}

export default Banner
