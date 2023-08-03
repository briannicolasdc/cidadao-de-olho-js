import { DataTypes, Sequelize } from "sequelize";
import { getDeputadosList, getGastoTotalDeputado } from "./deputados-api.js";

const sequelize = new Sequelize('deputadosDB', 'root', 'password', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mariadb',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const Deputado = sequelize.define('Deputado', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING
        },
        partido: {
            type: DataTypes.STRING
        },
        endereco: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.STRING
        },
        fax: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        sitePessoal: {
            type: DataTypes.STRING
        },
        naturalidade: {
            type: DataTypes.STRING
        },
        uf: {
            type: DataTypes.STRING
        },
        nascimento: {
            type: DataTypes.STRING
        },
        redesSociais: {
            type: DataTypes.JSON 
        },
        gastoTotal: {
            type: DataTypes.BIGINT
        }
  })

  async function storeInDB(){
    await Deputado.sync();

    const { count, rows } = await Deputado.findAndCountAll();
    if (count === 0 && rows === 0) {
        console.log('runnin if')
        const deputadosList = await getDeputadosList();
        for(let dep of deputadosList.list){
            const arrayRedes = [];
            let valor = await getGastoTotalDeputado(dep.id);
            for(let rede of dep.redesSociais){
                let tmp = {'nome': rede.redeSocial.nome, 'url': rede.url};
                arrayRedes.push(tmp);
            }
    
            const deputados = await Deputado.bulkCreate([
                {
                    id: dep.id,
                    nome: dep.nome,
                    partido: dep.partido,
                    endereco: dep.endereco,
                    telefone: dep.telefone,
                    fax: dep.fax,
                    email: dep.email,
                    sitePessoal: dep.sitePessoal,
                    naturalidade: dep.naturalidadeMunicipio,
                    uf: dep.naturalidadeUf,
                    nascimento: dep.dataNascimento,
                    redesSociais: arrayRedes,
                    gastoTotal: valor
                },
            ])
        }
        
      }
    
      
    }
    export default Deputado;
  storeInDB()

