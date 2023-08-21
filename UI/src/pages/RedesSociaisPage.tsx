import { useEffect, useState } from "react";
import {RedesProps} from '../types.tsx'
import { getRedes } from "../api";

export default function RedesComponent (): JSX.Element {


    const [redes, setRedes] = useState<RedesProps[]>([])

    useEffect(() => {
      fetchRedes()
    }, [])

    const fetchRedes = () => {
      getRedes()
        .then(redesList => {
          setRedes(redesList);
        })
        .catch((error: Error ) => {
          console.log(error)
          
        })
    }
    

  return (
    <>
    <div>
      <h1 className="pb-10 text-2xl">Redes sociais e quantidade de deputados que usam: </h1>
    {redes.map(rede => {
      const nome = rede[0] as string;
      const count = rede[1] as number;
        return (<h2 className="py-2.5 ">{nome} : {count}</h2>)
      })} 
    </div>
      
    </>    
  );
}