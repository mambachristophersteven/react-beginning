import React from 'react'

const ModeToggler = () => {
    let darkModeOn = true;
    let darkMode = <h1>Dark mode is turned on</h1>
    let lightMode = <h1>light mode is turned on</h1>

    const handleClick = () => {
        if (darkModeOn === true){
            darkModeOn = false;
            console.log('light mode is on');
        } else{
            if(darkModeOn === false){
                darkModeOn = true
                console.log('dark mode is on');
            }
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