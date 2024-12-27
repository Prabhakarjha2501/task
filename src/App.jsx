import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomUserTable from './component/RandomUserTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RandomUserTable/>
      </div>
      
    </>
  )
}

export default App
