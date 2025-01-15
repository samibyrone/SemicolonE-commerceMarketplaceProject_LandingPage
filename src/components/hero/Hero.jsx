import React, { useState } from "react";
import { herolist } from "../../assets/data/data";
import { BodyOne, Title } from "../CustomComponent";
// import shoe from "../../assets/images/shoe.png";
// import shoe2 from "../../assets/images/shoe2.png"; 
// import shoe3 from "../../assets/images/shoe3.png";
import PropTypes from "prop-types";

export const Hero = () => {
  return (
    <div>
      <section className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
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

export const HeroItem = ({title, description, prices, colors, image}) => {

  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  return (
    <>
      <section className="conten flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
            <Title
            level={1}
            className="leading-none font-medium text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>

          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>prices</Caption>
              <div className="mt-3">
                <Title level={5}>{selectedPrice.value.toFixed(2)}</Title>
              </div>
            </div>
          </div>
        </div>
        <h1>asadas</h1>
      </section>
    </>
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
  color: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};












// export const HeroItem = () => {

//   return (
//     <div className="leading-none font-medium text-3xl lg:text-[70px] lg:leading-snug"> 
//       <section className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
//         {/* <div className="left w-1/2 p-8 lg:p-32 lg:py-64"> */}
        
//         {herolist.map((item) => (
//           <div key={item.id}>
//             <h2 className="text-3xl font-bold">{item.title}</h2> 
//             <p className="text-lg text-gray-600">{item.description}</p> 
//             <div
//               className="right w-1/2 flex justify-end items-center"
//               style={{ backgroundColor: "blueviolet" }}
//             >
//               <img src={shoe} alt="Shoe" className="w-full h-full object-contain"/>
//               <img src={shoe2} alt="Shoe2" className="w-full h-full object-contain"/>
//               <img src={shoe3} alt="Shoe3" className="w-full h-full object-contain"/> 
//             </div>

//             {item.price.map((priceItem, index) => (
//               <div key={index} className="text-lg"> 
//                 <span className="font-bold" style={{color : priceItem.color}}>, 
//                   <h3 className="text-xl font-semibold text-gray-800">Prices : </h3> 
//                 Color  {priceItem.color.toUpperCase()}
//                 </span>
//                  : ₦ {priceItem.value.toFixed(3)}
//               </div> 
//             ))} 
//           </div> 
//         ))}
//         {/* </div>  */}
//       </section>
//     </div>
//     );
// };


// HeroItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   price: PropTypes.arrayOf(
//     PropTypes.shape({
//       color: PropTypes.string.isRequired,
//       value: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };









































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

