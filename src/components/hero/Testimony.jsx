import React from 'react';
import { BodyOne, Title } from '../CustomComponent';
import testimony from '../../assets/images/testimony.png';
import fab from "../../assets/images/fab.png";
import alfa from "../../assets/images/alfa.png";
import dunni from "../../assets/images/dunni.png";
import john from "../../assets/images/john.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div 
      className="absolute bottom-0 right-0 bg-white text-primary rounded-full slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div 
      className="absolute bottom-0 right-20 bg-white text-primary rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}



export const Testimony = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <>
      <section className="testimony">
        <div className="container h-full flex items-center justify-center">
          <div className="w-1/2 flex relative z-50">
            <div className='box w-96 h-96 bg-white rounded-full z-50'>
              <img 
                src={testimony} 
                alt="Testimony" 
                className="absolute -top-[130px] left-0 z-10 rounded-b-full "
              />
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-30 right-60 z-50">
              <BodyOne className="leading-none">Our Satified Customer</BodyOne>

              <div className="flex items-center">
                <img 
                  src={fab} 
                  alt="alfa" 
                  className='w-14 h-14 object-cover rounded-full border-2 border-gray-100'
                />
                <img 
                  src={alfa} 
                  alt="alfa" 
                  className='-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100'
                />
                <span className='-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100 bg-slate-50 flex items-center justify-center '>
                  +12k
                </span>
              </div>
            </div>
          </div>
          <div className='left w-1/2 relative z-50'>
            <Title level={2}>What our clients say about us</Title>
            <BodyOne className="mb-8">
              It is a long established fact that a reader will be distracted by the readable content of the page
              when looking at it's layout. The point of using lorem is that it has a more-or-less normal distribution of letters...
            </BodyOne>

            <Slider {...settings}>
              <TestimonialsCard 
                name="Adunni"
                post="Semicolon Native"
                cover={dunni}
              />
              <TestimonialsCard 
                name="John Daniel"
                post="Semicolon Native"
                cover={john}
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};


export const TestimonialsCard = ({cover, name, post}) => {
  return (
    <>
      <div className='flex items-center gap-8'>
        <div className='w-20 h-20'>
          <img 
            src={cover}
            alt="" 
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div className='details'>
          <Title className='font-medium leading-none' level={5}>
            {name}
          </Title>
          <p>{post}</p>
        </div>
      </div>
    </>
  )
}