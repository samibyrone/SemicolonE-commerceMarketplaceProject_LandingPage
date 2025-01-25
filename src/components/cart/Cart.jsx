import React, { useState } from 'react';
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { Badges, Title } from '../CustomComponent';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { CartActions, selectedTotalPrice, selectedTotalQuantity } from '../../redux/slice/CartSlice';

export const Cart = () => {

    const totalQuantity = useSelector(selectedTotalQuantity);
    const cartitems = useSelector((state) => state.cart.itemList);
    const totalPrice = useSelector(selectedTotalPrice);

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
                    <Badges color="bg-primary-green">{totalQuantity}</Badges>
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
                        <div className='flex justify-between gap-5'>
                            <button 
                                className={`flex items-center gap-2 font-medium ${
                                    activeTab === "cart" ? "text-primary" : "" }`} 
                                    onClick={() => handleTabChange("cart")}
                            >
                                Shopping Cart
                                <span className='w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-pr'>
                                    {totalQuantity}
                                </span>
                            </button>
                            <button 
                                className={`flex items-center gap-2 font-medium ${
                                    activeTab === "wishlist" ? "text-primary" : "" }`} 
                                    onClick={() => handleTabChange("wishlist")}
                            >
                                Wishlist
                                <span className='w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-pr'>
                                    0
                                </span>
                            </button>
                        </div>
                        <div className="line-container">
                            <div 
                                className={`line ${activeTab === "cart" ? "active" : ""}`}
                            >
                            </div>
                            <div 
                                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
                            >
                            </div>
                        </div>
                        {activeTab == "cart" ? (
                            <>
                                {cartitems.map((item) => (
                                    <CartProduct
                                        key={item.id}
                                        id={item.id}
                                        cover={item.cover}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                    />
                                ))}
                            
                                <div className='total flex items-center justify-between mt-10'>
                                    <Title level={6}>SubTotal: </Title>
                                    <Title level={6}>₦{totalPrice.toFixed(2)}</Title>    
                                </div>
                                <div className='checkout'>
                                    <button className='primary-btn w-full'>View Cart</button>    
                                </div>
                                <NavLink to="/cart">
                                    <button className='primary-btn w-full'>View Cart</button>
                                </NavLink>
                            </>
                            ) : (
                             <>show product</>
                        )}
                    </div>
                </>
            )}
        </>
    );
};


export const CartProduct = ({id, cover, name, quantity}) => {

    const dispatch = useDispatch();

    const removeCartItems = () => {
        dispatch(CartActions.removeAllCartItem(id));
    };

    return (
        <>
            <div className='mt-5 border-b-2 border-gray-200 pb-5'>
                <div className='flex items-center gap-5'>
                    <div className='images w-20 h-20'>
                        {cover?.slice(0, 1).map((images, index) => (
                            <img 
                                src={images?.image} 
                                alt="" 
                                key={index}
                                className='w-full h-full object-cover'
                            />
                        ))}
                    </div>
                    <div className='details w-1/2'>
                        <BodyOne>{name}</BodyOne>
                        <p className='text-primary-green'>
                            {quantity} * ₦{price?.toFixed(2)}
                        </p>
                    </div>
                    <button className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary'>
                        <IoCloseOutLine size={25} onClick={removeCartItems}/>
                    </button>
                </div>
            </div>
        </>
    );
};