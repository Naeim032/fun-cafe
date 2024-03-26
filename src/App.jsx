import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Menu from './Component/Menu/Menu'
import Answer from './Component/Answer/Answer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Answer></Answer>
    </>
  )
}

export default App
