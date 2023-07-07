import { DataTypes, Sequelize, json } from "sequelize";

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
  })

  