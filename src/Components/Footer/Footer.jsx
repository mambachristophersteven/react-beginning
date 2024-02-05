import React from 'react'

const Footer = () => {
    const userName = function(firstname,lastname){
        return firstname + " " + lastname;
    }
  return (
    <div>{userName("Kofi","Amponteng")}</div>
  )
}

export default Footer