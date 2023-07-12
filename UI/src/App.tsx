import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getDeputados } from './api'

const testGetDeputados = async () => {
  const message = await getDeputados()
  return console.log(message)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={testGetDeputados}>get deputados</button>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
