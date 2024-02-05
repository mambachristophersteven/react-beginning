// import React from 'react'

// const Button = () => {
//     const clickHandler = () => {
//         console.log('button has been clicked')
//     }
//   return (
//     <div>
//         <button onClick={clickHandler}>
//             Click Me
//         </button>
//     </div>
//   )
// }

// export default Button

import React from 'react'

const Button = () => {
    const clickHandler = () => {
        console.log('button has been mouse overed')
    }
  return (
    <div>
        <button onMouseOver={clickHandler}>
            Click Me
        </button>
    </div>
  )
}

export default Button