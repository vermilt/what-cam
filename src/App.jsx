import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import questions from './data/questions'
import Questionnaire from './components/Questionnaire'

function App() {
  

  return (
    <>
      <h1>What Camera?</h1>
      
      <Questionnaire/>
    </>
  )
}

export default App
