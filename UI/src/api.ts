
const BASE_URL= 'http://localhost:5000'

export const getDeputados = () => {
  return fetch(BASE_URL+'/deputados').then(resp => resp.json())
}