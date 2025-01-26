import React from 'react'
import { useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';

export const CheckoutForm = ({total, handlePaymentSuccessful}) => {

  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccessful()
    dispatch(clearCart())
  }

  return (
    <>
      <StripeCheckout
        token = {handleToken}
        stripeKey = "pk_test_51Lojp7HPatTXixZvuBdyW0Ff28QXnV64xM0HFOw4uTFmfyDZ1FKdVZXeo0TY5v0T5GBKw1VnjsmSFtGWQzmh3700vbOn2kSH"
        amount = {total * 100}
        name = "Semicolon Ecommerce Website"
        email = "Semicolon@gmail.com"
        description = "Payment using stripe"
      >
        <button className='w-full bg-gray-200 py-3.5 my-3 font-medium'>
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
