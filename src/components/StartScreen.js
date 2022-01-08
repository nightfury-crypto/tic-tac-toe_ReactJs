import React from 'react'
import './StartScreen.css'

const StartScreen = ({checkStart}) => {
    return (
        <div className='start'>
            <img src="./img/tictactoe.png" alt="logo" />
            <button onClick={checkStart}>Start</button>
        </div>
    )
}

export default StartScreen
