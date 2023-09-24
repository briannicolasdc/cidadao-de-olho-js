import { Deputado, GastosTotais, RedesProps } from "./types";

const BASE_URL = "http://localhost:5000";

export const getDeputados = (): Promise<Deputado[]> => {
  return fetch(BASE_URL + "/deputados").then(
    (resp) => resp.json() as Promise<Deputado[]>,
  );
};

export const getRedes = () => {
  return fetch(BASE_URL + "/redes-sociais").then(
    (resp) => resp.json() as Promise<RedesProps[]>,
  );
};

export const getGastosTotais = () => {
  return fetch(BASE_URL + "/gastos-totais").then(
    (resp) => resp.json() as Promise<GastosTotais[]>,
  );
};

export const getGastoPorId = (id: number | string) => {
  return fetch(`${BASE_URL}/deputados/${id}/gastos`).then(
    (resp) => resp.json() as Promise<GastosTotais>,
  );
};
