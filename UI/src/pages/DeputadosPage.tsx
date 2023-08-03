import { useEffect, useState } from "react";
import { getDeputados } from "../api";
import { Deputado } from "../types";

export default function DeputadosPage(): JSX.Element {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const [deputados, setDeputados] = useState<Deputado[]>([])

    useEffect(() => {
        fetchDeputados()
    }, [])

    const fetchDeputados = () => {
        setIsLoading(true);
        getDeputados()
            .then(deputadosList => {
                setDeputados(deputadosList)
                setIsLoading(false)
            }).catch((error: Error) => {
                setError('Ocorreu um erro.' + error.message)
                setIsLoading(false)
            })
    }

    if (isLoading) {
        return <div>loading....</div>
    }

    if (error != '') {
        return (
            <div>
                {error}
                <button onClick={() => fetchDeputados()}>
                    Tentar novamente
                </button>
            </div>
        )
    }

    const keys = Object.keys(deputados[1]);

    return (
        <div>
            {JSON.stringify(deputados)}
            <table>
                <thead>
                    {keys.map(objkey => (
                        <th>{objkey}</th>
                    ))}
                </thead>
                <tbody>

                    {deputados.map((item, index) => {
                        return (
                            <tr key={index}>
                                {keys.map((key, index) => {
                                    return <td key={index}>{item[key]}</td>
                                })}
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}