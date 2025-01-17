import React from 'react';
import { Title, BodyOne } from '../CustomComponent';
import { ProductCard } from './ProductCard';
import { productlists } from '../../assets/data/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";




export const ProductSlide = () => {
  return (
    <>
        <section className="py-20 bg-white slideproduct">
            <div className="container">
                <Title level={4}>
                    What is trending now
                </Title>
                <div className="flex items-center gap-3 uppercase">
                    <BodyOne className="text-sm">
                        DISCOVER THE MOST TRENDING PRODUCTS IN SEMICOLON
                    </BodyOne>
                </div>

                <ProductSlideCard />
            </div>    
        </section>
    </>
  );
};


export const ProductSlideCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    

    return (
        <>
            <Slider {...settings}>
                {productlists.map((product) => (
                    <ProductCard 
                        id={product.id}
                        key={product.key}
                        title={product.title}
                        description={product.description}
                        images={product.images}
                        price={product.price}
                        discount={product.discount}
                        rating={product.rating}
                        featured={product.featured}
                        category={product.category}
                        color={product.color}
                    />
                ))}
            </Slider>
        </>
    );
};