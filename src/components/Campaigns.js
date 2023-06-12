import Banner from 'api/banner.json';
import { useState, useEffect } from 'react';
import Title from 'components/UI/Title';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function NextBtn({ onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowForward size={22} />
        </button>
    )
}

function PrevBtn({ onClick }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    )
}

export default function Campaigns() {
  
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banner);
  }, [])

  const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 3500,
      cssEase: 'linear',
      nextArrow: <NextBtn />,
      prevArrow: <PrevBtn />
  };

  return (
    <div className='container mx-auto py-8'>
    <Title>Kampanyalar</Title>
        <Slider className="-mx-2" {...settings}>
          {Banner.length && Banner.map((banner, index) => (
            <div key={banner.id}>
                <picture className='block px-2'>
                    <img src={banner.image} className="rounded-lg" />
                </picture>
            </div>
          ))}
        </Slider>
    </div>
  )
}