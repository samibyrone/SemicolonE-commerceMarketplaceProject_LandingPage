import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartActions, clearCart, selectedTotalPrice } from '../redux/slice/CartSlice';
import bghotel from "../assets/images/Frame (1).png";
import { BodyOne, Title } from '../components/CustomComponent';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import StripeCheckout from 'react-stripe-checkout';

export const CartPage = () => {
  
    const cartitems = useSelector((state) => state.cart.itemList);

    const totalPrice = useSelector(selectedTotalPrice);
    
    const dispatch = useDispatch();
  
    const handleToken = (token) => {
        console.log("=============================");
        console.log(token);
        console.log("=============================");
        dispatch(clearCart());
    }

    return (
        <>
            <section className='mt-16'>
                <div className='h-[50vh]'>
                    <div className='images absolute top-0 left-0 w-full h-1/2'>
                        <img src={bghotel} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className='text absolute top-48 left-[45%]'>
                        <Title level={1}>Cart</Title>
                    </div>
                </div>
                <div className='container flex justify-between'>
                    <div className='w-2/3'>
                        <div className='relative overflow-x-auto sm:rounded-lg'>
                            <table className='w-full text-sm text-left rtl:text-right'>
                                <thead className='text-xs text-primary uppercase bg-gray-50'>
                                    <tr>
                                        <th scope='col' className='px-16 py-5'>
                                            Thumnail
                                        </th>                                        
                                        <th th scope='col' className='px-6 py-3'>
                                            Product
                                        </th>                                        
                                        <th th scope='col' className='px-6 py-3'>
                                            Price
                                        </th>                                        
                                        <th th scope='col' className='px-6 py-3'>
                                            Quantity
                                        </th>                                        
                                        <th th scope='col' className='px-6 py-3'>
                                            Subtotal
                                        </th>
                                        <th scope='col' className='px-6 py-3'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartitems?.map((item) => {
                                        <CartPageCard 
                                            key={item.id}
                                            id={item?.id}
                                            cover={item?.cover}
                                            name={item?.name}
                                            price={item?.price}
                                            quatity={item?.quatity}
                                            totalPrice={item?.totalPrice}
                                        />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-2/6 ml-16">
                        <div className='bg-gray-100 p-5'>
                            <p className='text-lg font-medium text-primary'>Cart totals</p>
                            <hr className='my-2 h-[2px] bg-gray-200'/>
                            <div className='text-lg font-medium text-primary flex items-center gap-5'>
                                <p className='w-32'>Subtotal</p>
                                <p className='text-sm font-normal'>${totalPrice.toFixed(2)}</p>
                            </div>
                            <hr className='my-3 h-[2px] bg-gray-200'/>
                            <div className='text-lg font-medium text-primary flex items-center gap-5'>
                                <p className='w-32'>Shipping</p>
                                <p className='text-sm font-normal'>Enter Your Address To View Shipping Options.</p>
                            </div>
                            <hr className='my-3 h-[2px] bg-gray-200'/>
                            <div className='text-lg font-medium text-primary flex items-center gap-5'>
                                <p className='w-32'>Total</p>
                                <p className='text-sm font-normal'>${totalPrice.toFixed(2)}</p>
                            </div>
                            
                            <StripeCheckout
                                token = {handleToken}
                                stripeKey = "pk_test_51Lojp7HPatTXixZvuBdyW0Ff28QXnV64xM0HFOw4uTFmfyDZ1FKdVZXeo0TY5v0T5GBKw1VnjsmSFtGWQzmh3700vbOn2kSH"
                                amount = {total * 100}
                                name = "Semicolon Ecommerce Website"
                                email = "Semicolon@gmail.com"
                                description = "Payment using stripe"
                            >
                                <button className='primary-btn mt-5'>
                                    Proceed To Checkout
                                </button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export const CartPageCard = ({id, cover, name, price, quantity, totalPrice}) => {

    const dispatch = useDispatch();
    
    const inCartIems = () => {
        dispatch(CartActions.addToCart({id, name, price}));
    };
    
    const removeCartItem = () => {
        dispatch(CartActions.removeFromCart(id));
    };
    
    const removeCartItems = () => {
        dispatch(CartActions.removeAllFromCart(id));
    };

  return (
    <>
        <tr className='bg-white border-b hover:bg-gray-50'>
            <td className='p-4'>
                {cover.slice(0, 1).map((image, item) => (
                    <img 
                        key={item}
                        src={image.image}
                        alt={item}
                        className='w-24 h-24 object-cover'
                    />
                ))}
            </td>
            <td className='px-6 py-4'>
                <BodyOne>{name}</BodyOne>
            </td> 
            <td className='px-6 py-4'>
                <BodyOne>${price.toFixed(2)}</BodyOne>
            </td>
            <td className='px-6 py-4'>
                <div className='flex items-center gap-3'>
                    <button
                        onClick={inCartIems}
                        className='w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300'
                    >
                        <BiPlus size={20} />
                    </button>
                    <input 
                        type="text"
                        value={quantity}
                        readOnly
                        className='w-16 h-12 text-primary outline-none border border-gray-300 px-6'
                    />
                    <button 
                        className='w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300'
                        onClick={removeCartItem}
                    >
                        <BiMinus size={20} />
                    </button>
                </div>
            </td>
            <td className='px-6 py-4'>
                <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
            </td>
            <td className='px-6 py-4'>
                <button
                    onClick={removeCartItems}
                    className='w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white'
                >
                    <IoCloseOutline size={25} />
                </button>
            </td>
        </tr>    
    </>
  );
};


