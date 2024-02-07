import express from 'express';
import {router} from './src/router/routes.js';
import setupDocumentationRoute from './src/controllers/documentacao.js';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './config/swagger-output.json' assert { type: "json" };



const app = express();
setupDocumentationRoute(app);
app.use(express.json());
app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(4000, () => console.log('Servidor Online na Porta 4000'));
