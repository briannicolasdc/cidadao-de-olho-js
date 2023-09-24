import { useEffect, useState } from "react";
import { GastosTotais } from "../types";
import { getGastosTotais } from "../api";

export default function GastosPage(): JSX.Element {
  const [gastos, setGastos] = useState<GastosTotais[]>([]);

  useEffect(() => {
    fetchGastos();
  }, []);

  const fetchGastos = () => {
    getGastosTotais()
      .then((gastosList) => {
        setGastos(gastosList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="text-2xl pb-10">Gastos totais dos deputados em 2019:</h1>
      {gastos.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(gastos[0]).map((objkey) => {
                return (
                  <th key={objkey} className="text-lg">
                    {objkey}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {gastos.map((gasto, index) => {
              const keys = Object.keys(gasto);
              return (
                <tr key={index}>
                  {keys.map((key, index) => (
                    <td key={index} className="px-10 py-5">
                      {gasto[key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
