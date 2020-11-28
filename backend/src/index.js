// importando dependecias do express
const express = require ('express');
// quem vai acessar a aplicação
const cors = require ('cors');
const routes = require ('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);