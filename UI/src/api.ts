import { Deputado, redesProps } from "./types"

const BASE_URL= 'http://localhost:5000'

export const getDeputados = (): Promise<Deputado[]> => {
  //return Promise.reject(new Error('deu ruim'))
  return fetch(BASE_URL+'/deputados').then(resp => resp.json() as Promise<Deputado[]>)
}

export const getRedes = () => {
  return fetch(BASE_URL+'/redes-sociais').then(resp => resp.json() as Promise<redesProps[]>)
}

export const getGastosTotais = () => {
  return fetch (BASE_URL+'/gastos-totais').then(resp => resp.json())
}