const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

const isDev = process.env.NODE_ENV === 'development';

sequelize.sync({ force: isDev })
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.log('Erro ao conectar ao banco de dados', err);
  });