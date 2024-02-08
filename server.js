import express from 'express';
import {router} from './src/router/routes.js';
import pratosRoutes from './src/router/pratosRoutes.js'
import docSwagger from './src/router/docSwagger.js'
import pedidosRoutes from './src/router/pedidosRoutes.js'


const app = express();
app.use(express.json());
app.use(router);


app.use('/prato', pratosRoutes);
app.use('/pedido', pedidosRoutes);
app.use('/doc', docSwagger);


app.listen(4000, () => console.log('Servidor Online na Porta 4000'));
