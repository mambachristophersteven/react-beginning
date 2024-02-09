import React, { useRef, useState } from 'react'

const Calculator = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus =(e) =>{
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }
    const minus =(e) =>{
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }
    const multiply =(e) =>{
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }
    const divide =(e) =>{
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }
    const resetInput =(e) =>{
        e.preventDefault();
        inputRef.current.value = 0;
    }
    const resetResult =(e) =>{
        e.preventDefault();
        setResult((preVal) => preVal * 0);
    }
  return (
    <div className="calculator">
        <h1>Simplest Working Calculator</h1>
        <form>
            <p ref={resultRef}>{result}</p>
            <input 
            pattern='[0-9]' 
            type='number' 
            ref={inputRef} 
            placeholder='Type a number'
            />
            <br />
            <button onClick={plus}>add</button>
            <button onClick={minus}>minus</button>
            <br />
            <button onClick={multiply}>multiply</button>
            <button onClick={divide}>divide</button>
            <br />
            <button onClick={resetInput}>clear</button>
            <button onClick={resetResult}>AC</button>
        </form>
        
    </div>
  )
}

export default Calculator