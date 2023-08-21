import { useEffect, useState } from "react";
import { GastosTotais } from "../types";
import { getGastoPorId } from "../api";

export default function GastoPorID () :JSX.Element {

    const [deputado, setDeputado] = useState<GastosTotais>();

    useEffect(() => {
        fetchDeputado();
    }, []);

    const fetchDeputado = () => {
        getGastoPorId()
        .then(deputado => {
            console.log(deputado)
            setDeputado(deputado);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div><h5>{deputado?.gasto}</h5></div>
    );
}