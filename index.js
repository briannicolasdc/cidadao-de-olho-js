import _ from 'lodash'
import express from 'express';
const app = express();
const port = 5000;

function getDeputadosList() {
    return fetch('http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json')
        .then(response => response.json())
        .catch(error => console.error(error));
}

function getGastoMesDeputado(id, mes) {
    return fetch('http://dadosabertos.almg.gov.br/ws/prestacao_contas/verbas_indenizatorias/deputados/' + id + '/2019/' + mes + '?formato=json')
        .then(response => response.json())
        .catch(err => console.error(err));
}

async function getGastoTotalDeputado(id) {
    let somaGastoTotal = 0;
    for (let mes = 1; mes <= 12; mes++) {
        const gastoDeputado = await getGastoMesDeputado(id, mes);
        if (gastoDeputado && gastoDeputado.list && gastoDeputado.list.length > 0) {
            for (const gasto of gastoDeputado.list) {
                somaGastoTotal += gasto.valor;
            }
        }
    }
    return somaGastoTotal;
}

async function getGastosTotais(){
    const countGastosTotais = [];
    const deputadosList = await getDeputadosList();
    for(const deputado of deputadosList.list){
        let valor = await getGastoTotalDeputado(deputado.id);
        let tmp = {'valor': valor, 'nome': deputado.nome};
        countGastosTotais.push(tmp);
    }
    //countGastosTotais.sort((a, b) => {b.valor - a.valor});
    return countGastosTotais;
}

async function getRedes() {
    const countRedes = {};
    const deputadosList = await getDeputadosList();
        for(const deputado of deputadosList.list){
            for(const item of deputado.redesSociais){
                const redeSocial = item.redeSocial;
                if(countRedes.hasOwnProperty(redeSocial.nome)){
                    countRedes[redeSocial.nome]++;
                }else{
                    countRedes[redeSocial.nome] = 1;
                }
            }
        }
        let entries = Object.entries(countRedes);
        let sort = entries.sort((a, b) => b[1] - a[1]);
    return sort;
}

function main() {
    // getDeputadosList()
    //     .then(deputadosList => {
    //         console.log(deputadosList);
    //     });
    // getGastoTotalDeputado('7752')
    //     .then(gasto =>{
    //         console.log(gasto);
    //  })
    // getRedes()
    //     .then(countRedes => {
    //         console.log(countRedes);
    //     })
    getGastosTotais()
        .then(list => 
            console.log(list));

}

main();