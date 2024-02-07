import express from 'express';
import {router} from './src/router/routes.js';



const app = express();

app.use(express.json());
app.use(router);


app.listen(4000, () => console.log('Servidor Online na Porta 4000'));
