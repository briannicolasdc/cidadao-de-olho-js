import { useEffect, useState } from "react";
import { getDeputados } from "../api";
import { Deputado, RedeSocial } from "../types";

export default function DeputadosPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deputados, setDeputados] = useState<Deputado[]>([]);

  useEffect(() => {
    fetchDeputados();
  }, []);

  const fetchDeputados = () => {
    setIsLoading(true);
    getDeputados()
      .then((deputadosList) => {
        setDeputados(deputadosList);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError("Ocorreu um erro." + error.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>loading....</div>;
  }

  if (error != "") {
    return (
      <div>
        {error}
        <button onClick={() => fetchDeputados()}>Tentar novamente</button>
      </div>
    );
  }

  const keys = Object.keys(deputados[1]);

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            {keys.map((objkey) => {
              if (objkey !== "createdAt" && objkey !== "updatedAt") {
                return <th className="text-sm">{objkey}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {deputados.map((item, index) => {
            return (
              <tr key={index}>
                {keys.map((key, index) => {
                  if (key !== "createdAt" && key !== "updatedAt") {
                    if (key === "redesSociais") {
                      return (
                        <td key={index}>
                          {item.redesSociais.map((rede, redeIndex) => (
                            <div key={redeIndex}>
                              <RedeSocialComponent
                                nome={rede.nome}
                                url={rede.url}
                              />
                            </div>
                          ))}
                        </td>
                      );
                    } else {
                      return (
                        <td key={index} className="text-xs py-5 px-1">
                          {item[key]}
                        </td>
                      );
                    }
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function RedeSocialComponent(props: RedeSocial): JSX.Element {
  return (
    <div className="px-10">
      <a href={props.url}>
        <i className={"fa-brands fa-" + props.nome.toLowerCase()}></i>
      </a>
    </div>
  );
}
