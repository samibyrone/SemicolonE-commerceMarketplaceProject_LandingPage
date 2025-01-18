import { Banner, Hero, InstagramPost, Product, ProductSlide, ShippingInfo, Testimony} from "../../router";
import { Title, Caption } from "../../components/CustomComponent";
import { ProductSlideCard } from "../../components/products/ProductSlide";

export const Home = () => {
    return (
        <>
            <Hero />
            <Product />
            <ShippingInfo />
            <Banner />
            <ProductSlide />
            <Testimony />

            <div className="container my-16 slideproduct">
                <Title>Recent Product</Title>
                <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN THE SEMICOLON MARKETPLACE</Caption>
                <br />
                <ProductSlideCard />
            </div>
            <InstagramPost />
        </>
    );
};