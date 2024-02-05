import React from 'react'

const Navbar = (props) => {
    console.log(props)
  return (
    <div>Hello, my name is {props.name}. I am {props.age} and i have a {props.weapon}.</div>
  )
}

export default Navbar