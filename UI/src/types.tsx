
export interface Deputado {
  id: number;
  nome: string;
  partido: string;
  endereco: string;
  telefone: string;
  fax: string;
  email: string;
  sitePessoal?: string;
  naturalidade: string;
  uf: string;
  nascimento: string;
  redesSociais: RedeSocial[];
  gastoTotal: number;
}

export interface RedeSocial {
  nome: string;
  url: string;
}


// "id":4458,"nome":"Marquinho Lemos","partido":"PT","endereco":"Rua Rodrigues Caldas, 79 Edifício Tiradentes - 22º andar  - sala 1","telefone":"(31) 2108-5935","fax":"(31) 2108-5936","email":"dep.marquinho.lemos@almg.gov.br","sitePessoal":null,"naturalidade":"Carbonita","uf":"MG","nascimento":"3/7/1959","redesSociais":[{"nome":"Facebook","url":"https://www.facebook.com/marquinholemosdeputado/"},{"nome":"Instagram","url":"https://www.instagram.com/marquinhodeputado/"}],"gastoTotal":270411,"createdAt":"2023-07-
// interface deputadoListProps {
//   deputados: deputadoProps[];
// }

// export const deputadoListComponent({id, nome, partido, endereco, telefone, fax, email, sitePessoal, naturalidade, uf, nascimento, redesSociais, gastoTotal }: deputadoProps): => {
//   return(
//     <tr key={id}>
//         <td>{id}</td>
//         <td>{nome}</td>
//         <td>{partido}</td>
//         <td>{endereco}</td>
//         <td>{telefone}</td>
//         <td>{fax}</td>
//         <td>{email}</td>
//         <td>{sitePessoal}</td>
//         <td>{naturalidade}</td>
//         <td>{uf}</td>
//         <td>{nascimento}</td>
//         <td>{ }</td>
//         <td>{gastoTotal}</td>
//       </tr>
//   )
// }


export interface redesProps {
  nome: string, 
  count: number
}

// interface redesListProps {
//   redes: redesProps[]
// }


// const redesListComponent = ({nome, count}: redesProps) => {
//   return (
//     <h3>{nome + ':' + count}</h3>
//   )
// }








