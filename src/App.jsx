import React from 'react'
import './App.css'
import Container from './Container'
import Theam, { ThemeContext } from './TheamContext'
const App = () => {
  return (
    <div><ThemeContext.Provider value={Theam}>
      <Container></Container>
    </ThemeContext.Provider>
        
    </div>
  )
}

export default App