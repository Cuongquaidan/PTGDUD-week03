import { useState } from 'react'
import Caculator from './components/Caculator'
import Lab02a from './components/Lab02a'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container p-4 flex flex-col items-center justify-center'>
      <Lab02a></Lab02a>
      <Caculator></Caculator>
    </div>
  )
}

export default App
