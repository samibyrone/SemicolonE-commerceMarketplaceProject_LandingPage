import { Banner, Hero, Product, ProductSlide, ShippingInfo } from "../../router";

export const Home = () => {
    return (
        <div>
            <Hero />
            <Product />
            <ShippingInfo />
            <Banner />
            <ProductSlide />
        </div>
    );
};