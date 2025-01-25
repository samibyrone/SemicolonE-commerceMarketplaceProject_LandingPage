import React from 'react'
import { useDispatch } from 'react-redux'

export const CheckoutForm = ({total, handlePaymentSuccessful}) => {

  const dispatch = useDispatch();

  const handleToken = token => {
    handlePaymentSuccessful()
    dispatch(clearCart())
  }

  return (
    <>
        <div>
            
        </div>
    </>
  )
}
