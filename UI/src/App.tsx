import { useState } from 'react'
import './App.css'
import { getDeputados, getGastosTotais, getRedes, getGastoPorId } from './api'

const getGastos = async () => {
  const gastos = await getGastoPorId();
  return console.log(gastos);
}

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
        <button className='text-blue-900' onClick={() => testGetDeputados()}>get deputados</button>
        <button onClick={() => testGetRedes()}>get redes</button>
        <button onClick={() => getGastos()}>get gastos</button>
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
