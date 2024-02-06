import React from 'react'
import PromoHeading from '../PromoHeading/PromoHeading';


const Footer = () => {
    const userName = function(firstname,lastname){
        return firstname + " " + lastname;
    }

    const data ={
        heading: "Enjoy all discounts here",
        callToAction: "For this festive season!!"
    }
  return (
    <div>
        {userName("Kofi","Amponteng")}
        <PromoHeading heading = {data.heading} callToAction = {data.callToAction}/>
    </div>
    
  )
}

export default Footer