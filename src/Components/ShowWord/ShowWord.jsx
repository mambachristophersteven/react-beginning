import React, { useState } from 'react'

const ShowWord = () => {
    const [word,setWord] = useState('Grrrr');

    const handleClick = () =>{
        setWord('king kong!!')
    }
    

  return (
    <div>
        The current word state: {word}
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ShowWord