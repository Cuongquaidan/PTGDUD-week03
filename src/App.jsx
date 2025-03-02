import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caculator from './components/Caculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container p-4 flex items-center justify-center'>
      <Caculator></Caculator>
    </div>
  )
}

export default App
