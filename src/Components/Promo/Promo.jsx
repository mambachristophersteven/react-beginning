import React from 'react'
import PromoHeading from '../PromoHeading/PromoHeading'

const Promo = () => {

    const data = {
        heading: "50% off all stocks",
        callToAction: "Everything must go"
    }
  return (
    <div>
        <PromoHeading heading = {data.heading} callToAction = {data.callToAction}/>
    </div>
  )
}

export default Promo