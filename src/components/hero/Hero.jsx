import React from "react";
import { herolist } from "../../assets/data/data";
import shoe from "../../assets/images/shoe.png";
import shoe2 from "../../assets/images/shoe2.png"; 
import shoe3 from "../../assets/images/shoe3.png";
import PropTypes from "prop-types";

export const Hero = () => {
  return (
    <div>
      <section >
        {herolist.map((item) => (
          <HeroItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            color={item.color}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
};

export const HeroItem = () => {

  return (
    <div className="leading-none font-medium text-3xl lg:text-[70px] lg:leading-snug"> 
      <section className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        {/* <div className="left w-1/2 p-8 lg:p-32 lg:py-64"> */}
        
        {herolist.map((item) => (
          <div key={item.id}>
            <h2 className="text-3xl font-bold">{item.title}</h2> 
            <p className="text-lg text-gray-600">{item.description}</p> 
            <div
              className="right w-1/2 flex justify-end items-center"
              style={{ backgroundColor: "blueviolet" }}
            >
              <img src={shoe} alt="Shoe" className="w-full h-full object-contain"/>
              <img src={shoe2} alt="Shoe2" className="w-full h-full object-contain"/>
              <img src={shoe3} alt="Shoe3" className="w-full h-full object-contain"/> 
            </div>

            {item.price.map((priceItem, index) => (
              <div key={index} className="text-lg"> 
                <span className="font-bold" style={{color : priceItem.color}}>, 
                  <h3 className="text-xl font-semibold text-gray-800">Prices : </h3> 
                Color  {priceItem.color.toUpperCase()}
                </span>
                 : ₦{priceItem.value.toFixed(3)}
              </div> 
            ))} 
          </div> 
        ))}
        {/* </div>  */}
      </section>
    </div>
    );
};


HeroItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  };









































// export const HeroItem = ({ title, description, price, color, image}) => {
//     return (
//         <>
//             <section className="conten flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
//                 <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
//                     <Title
//                         level={1}
//                         className="leading-none font-medium md-text-3xl lg:text-[70px] lg:leading-snug"
//                         >
//                         {title}
//                     </Title>
//                 </div>
//                 <h1>hamstadam</h1>    
//             </section>    
//       </>
//     );
// };

