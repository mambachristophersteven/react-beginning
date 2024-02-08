import React, { useRef, useState } from 'react'

const Calculator = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus =(e) =>{
        e.prevetDefault();
        setResult((result) => result + Number(inputRef.current.value))
    }
    const minus =(e) =>{
        e.prevetDefault();
        setResult((result) => result - Number(inputRef.current.value))
    }
    const multiply =(e) =>{
        e.prevetDefault();
        setResult((result) => result * Number(inputRef.current.value))
    }
    const divide =(e) =>{
        e.prevetDefault();
        setResult((result) => result / Number(inputRef.current.value))
    }
  return (
    <div className="calculator">
        <h1>Simplest Working Calculator</h1>
        <input type="number" name="number" id="" placeholder='Input a number'/>
        <button>add</button>
    </div>
  )
}

export default Calculator