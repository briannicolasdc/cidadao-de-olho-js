import { useState } from "react";
import "./App.css";
import { getDeputados, getGastosTotais, getRedes, getGastoPorId } from "./api";

const getGastos = async () => {
  const gastos = await getGastoPorId();
  return console.log(gastos);
};

const testGetDeputados = async () => {
  const message = await getDeputados();
  return console.log(message);
};

const testGetRedes = async () => {
  const redes = await getRedes();
  return console.log(redes);
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => testGetDeputados()}>
          <a href="http://localhost:5173/deputados">getDeputados</a>
        </button>
        <button onClick={() => testGetRedes()}>
          <a href="http://localhost:5173/redes-sociais">get redes</a>
        </button>
        <button onClick={() => getGastos()}>
          <a href="http://localhost:5173/gastos-totais">get gastos</a>
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
