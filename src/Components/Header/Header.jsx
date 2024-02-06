import React from 'react'
import Promo from '../Promo/Promo'

const Header = (props) => {
    const title = "Christopher"
  return (
    <div>
        <h1>{props.word}, {title}</h1>
        <Promo />
    </div>
  )
}

export default Header