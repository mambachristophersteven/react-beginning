import React from 'react'

const ModeToggler = () => {
    let darkModeOn = true;
    const darkMode = <h1>Dark mode is turned on</h1>
    const lightMode = <h1>light mode is turned on</h1>

    const handleClick = () => {
        darkModeOn =!darkModeOn;
        if(darkModeOn === true){
            console.log('dark mode is on');
        }else{
            console.log('light mode is on')
        }
    }
  return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>Toggle Modes</button>
    </div>
  )
}

export default ModeToggler