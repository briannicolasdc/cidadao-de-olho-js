import { useState } from 'react'
import './App.css'
import { getDeputados, getRedes } from './api'

const testGetDeputados = async () => {
  const message = await getDeputados();
  return console.log(message);
}


const testGetRedes = async () => {
  const redes = await getRedes();
  return console.log(redes);
}

function App() {
  const [count, setCount] = useState(0);  

  return (
    <>
      <div>
        <button onClick={() => testGetDeputados()}>get deputados</button>
        <button onClick={() => testGetRedes()}>get redes</button>
        <>
          {/* {listaDeputados()} */}
        </>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
