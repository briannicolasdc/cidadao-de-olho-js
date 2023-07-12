import express from 'express';
import cors from 'cors'
import {getRedes, getGastosTotais, getDeputadosList, getGastoTotalDeputado} from './deputados-api.js'
const app = express();
const port = 5000;
app.use(cors());

var router = express.Router();


// tarefa converter métodos da api para pegar dados do DB
router.get('/deputados',async (req, res) => {
    const deputadosData = await getDeputadosList();

    res.send(deputadosData.list)
})

router.get('/deputados/:deputadoId/gastos', async (req, res) => {
    const gastoTotalDeputado = await getGastoTotalDeputado(req.params.deputadoId)

    res.send({
        gasto: gastoTotalDeputado,
    })
})

router.get('/redes-sociais', (req, res) => {
    // tarefa: criar api para isso
    return getRedes();
});

router.get('/gastos-totais', (req, res) => {
    // tarefa: criar api para isso
})

app.use(router)
app.listen(port, () => console.log('app is running on port ' + port))