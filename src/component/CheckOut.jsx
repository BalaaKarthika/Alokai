import React from 'react'
import Contactform from './Contactform'
import BillingAddress from './BillingAddress'
import PaymentMethod from './PaymentMethod'

export const CheckOut = () => {
  return (
    <div>
        <Contactform />
        <BillingAddress />
        <PaymentMethod />
    </div>
  )
}
