import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import './style.css'

function App() {

  const [showStartPage, setShowStartPage] = React.useState(true)

  function handleChange(){
    setShowStartPage(prevState => !prevState)
  }

  return (
    <div>
      {showStartPage ? <StartPage handleOnClick={handleChange}/> : <QuizPage />}
    </div>
  )
}

export default App
