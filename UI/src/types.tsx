
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


export interface RedesProps {
  nome: string, 
  count: number
}

export interface GastosTotais{
  id: number,
  nome: string, 
  gasto: number
}








