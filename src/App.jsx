import { useState } from 'react'
import Caculator from './components/Caculator'
import Lab02a from './components/Lab02a'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center p-4 '>
      <Lab02a></Lab02a>
      <Caculator></Caculator>
    </div>
  )
}

export default App
