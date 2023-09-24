import { useEffect, useState } from "react";
import { GastosTotais } from "../types";
import { getGastoPorId } from "../api";
import { useParams } from "react-router-dom";

export default function GastoPorID(): JSX.Element {
  const { deputadoId } = useParams();
  const [gastoDeputado, setGastoDeputado] = useState<GastosTotais>();

  const fetchGastoDeputado = () => {
    if (deputadoId == null) return;

    getGastoPorId(deputadoId)
      .then((gastoDeputado) => {
        console.log(gastoDeputado);
        setGastoDeputado(gastoDeputado);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchGastoDeputado();
  }, []);

  return (
    <div>
      <h5>{gastoDeputado?.id}</h5>
    </div>
  );
}
