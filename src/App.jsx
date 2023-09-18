import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCoffee from './components/AddCoffee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddCoffee></AddCoffee>
    </>
  )
}

export default App
