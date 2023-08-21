import express from 'express';
import cors from 'cors'
import {getRedes} from './deputados-api.js'
import Deputado from './deputadosDB.js'

const app = express();
const port = 5000;
app.use(cors());

var router = express.Router();


// tarefa converter métodos da api para pegar dados do DB --> DONE
router.get('/deputados', async (req, res) => {
    try {
        const deputadosData = await Deputado.findAll({raw: true});
        res.send(deputadosData)
    } catch (error) {
        console.log(error);
    }
})

router.get('/deputados/:deputadoId/gastos', async (req, res) => { 
    const gastoTotalDeputado = await Deputado.findByPk(req.params.deputadoId, {attributes: ['id', 'nome', 'gastoTotal']});

    res.send({
        gasto: gastoTotalDeputado,
    })
})

router.get('/redes-sociais', async (req, res) => {
    const redes = await getRedes();
    res.send(redes);
});

router.get('/gastos-totais', async (req, res) => {
    try {
        const gastosTotais = await Deputado.findAll({attributes: ['id', 'nome', 'gastoTotal']});
        res.send(gastosTotais);
    } catch (error) {
        console.error(error);
    }
})

app.use(router)
app.listen(port, () => console.log('app is running on port ' + port))