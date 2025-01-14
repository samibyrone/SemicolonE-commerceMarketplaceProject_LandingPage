import React from "react";
import { herolist } from "../../assets/data/data";
import { Title } from "../CustomComponent";
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

export const HeroItem = ({ title, description, price, color, image }) => {
  return (
    <section className="conten flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
            <Title
            level={1}
            className="leading-none font-medium text-3xl lg:text-[70px] lg:leading-snug"
            >
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg text-gray-600">{description}</p>
                <div>
                    {price.map((price, index) => (
                    <p key={index} className="text-lg">
                        <span className="font-bold" style={{ color: price.color }}>
                            {price.color.toUpperCase()}
                        </span>
                        : ${price.value.toFixed(2)}
                    </p>
                    ))}
                </div>
                <p className="text-xl font-semibold text-gray-800">{price}</p>                 
            </Title>
        </div>
        <div
            className="right w-1/2 flex justify-end items-center"
            style={{ backgroundColor: color }}
        >
            <img src={image} alt={title} className="w-full h-full object-contain"/>
        </div>
    </section>
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











































// import React from 'react';
// import { herolist } from '../../assets/data/data';
// import { Title } from '../CustomComponent';
// import PropTypes from "prop-types";

// export const Hero = () => {
//   return (
//       <div>
//         <section className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
//             {herolist.map((item) => (
//                 <HeroItem 
//                     key={item.id} 
//                     title={item.title}
//                     description={item.description}
//                     price={item.price}
//                     color={item.color}
//                     image={item.image}    
//                 />
//             ))}    
//         </section>    
//     </div>
//   );
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

// // HeroItem.propTypes = { 
// //     title: PropTypes.string.isRequired,
// //     description: PropTypes.string.isRequired, 
// //     price: PropTypes.string.isRequired, 
// //     color: PropTypes.string.isRequired, 
// //     image: PropTypes.string.isRequired, 
// // };
  