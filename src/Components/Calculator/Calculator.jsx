import React, { useRef, useState } from 'react'

const Calculator = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus =(e) =>{
        e.prevetDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }
    const minus =(e) =>{
        e.prevetDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }
    const multiply =(e) =>{
        e.prevetDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }
    const divide =(e) =>{
        e.prevetDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }
    const resetInput =(e) =>{
        e.prevetDefault();
        inputRef.current.value = 0;
    }
    const resetResult =(e) =>{
        e.prevetDefault();
        setResult((preVal) => preVal * 0);
    }
  return (
    <div className="calculator">
        <h1>Simplest Working Calculator</h1>
        <form>
            <p ref={resultRef}>
                {/* {add the value of the current total} */}
            </p>
            <input 
            pattern='[0-9]' 
            type='number' 
            ref={inputRef} 
            placeholder='Type a number'
            />
        </form>
        <input type="number" name="number" id="" placeholder='Input a number'/>
        <button>add</button>
    </div>
  )
}

export default Calculator