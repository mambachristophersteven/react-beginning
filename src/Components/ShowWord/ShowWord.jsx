import React, { useState } from 'react'

const ShowWord = () => {
    const [word,setWord] = useState('Grrrr');
    console.log(useState('Grrrr'));

  return (
    <div>The current word state: {word}</div>
  )
}

export default ShowWord