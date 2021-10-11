import React, { useState } from 'react'
import Game from "./views/Game";
import Login from './views/Login';

const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <div>
    {
    login? <Game/>: <Login setLogin={setLogin}/>
    } 
     
    </div>
  )
}

export default App

