import { useEffect, useState } from "react";
import {redesProps} from '../types.tsx'
import { getRedes } from "../api";

export default function RedesComponent (): JSX.Element {


    const [redes, setRedes] = useState<redesProps[]>([])

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
      <h3>Redes sociais e quantidade deputados que usam: </h3>
    {redes.map(rede => {
      const nome = rede[0] as string;
      const count = rede[1] as number;
        return (<h5>{nome} : {count}</h5>)
      })} 
    </div>
      
    </>    
  );
}