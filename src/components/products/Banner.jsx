import React from 'react';
import { Title, BodyOne } from '../CustomComponent';
import { promotionalInfo } from '../../assets/data/data';

export const Banner = () => {
  return (
    <>
        <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
            {promotionalInfo.map((info) => (
                <>
                    <div className="box relative w-full" key={info.id}>
                        <div className="w-full h-[50vh]">
                            <img 
                                src={info.image}
                                className="w-full h-full object-cover"
                                alt="" 
                            />
                        </div>
                        <div className="absolute top-0 left-0 p-3 md:p-8 lg:w-2/3">
                            <span className="bg-white px-6 py-2 text-md">{info.title}</span>
                            <Title level={2} className="my-5">
                                {info.title}
                            </Title>
                            <BodyOne className="text-black">{info.description}</BodyOne>
                            <button className="secondary-btn my-3">Shop Now</button>
                        </div>
                    </div>
                </>
            ))}
        </section>  
    </>
  );
};
