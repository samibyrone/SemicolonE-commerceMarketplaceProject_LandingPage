import React, { useState } from 'react';
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { Badges } from '../CustomComponent';

export const Cart = () => {

    const [isOpen, setIsopen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [activeTab, setActiveTab] = useState("cart");

    const openCart = () => {
        setIsopen(true);
        document.body.style.overflowX = "hidden";
    };

    const closeCart = () => {
        setIsClosing(true);
        document.body.style.overflowX = "auto";
        setTimeout(() => {
            setIsopen(false);
            setIsClosing(false);
        }, 300);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  
    return (
        <>
            <button className="relative z-20" onClick={openCart}>
                <IoHeartOutline size={25} />
                <div className="absolute -top-2 -right-1.5">    
                   <Badges color="bg-primary-green">0</Badges> 
               </div>
            </button>

            <button className="relative z-20" onClick={openCart}> 
                <IoCartOutline size={25} />                    
                <div className="absolute -top-2 -right-1.5">    
                    <Badges color="bg-primary-green">0</Badges>
                </div>
            </button>
            
            {isOpen && (
                <>
                    <div className='cartoverlay' onClick={closeCart}></div>
                    <div
                        className={`cartmodel p-16 text-primary ${
                            isClosing ? "closing" : ""
                        }`}
                    >
                        Cart
                    </div>
                </>
            )}
        </>
    );
};
