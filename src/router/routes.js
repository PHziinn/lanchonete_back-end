import { Router } from 'express';
import PratosControllers from '../controllers/PratosControllers.js';
import PedidosControllers from '../controllers/PedidosControllers.js';
import UserControllers from '../controllers/UserControllers.js';
import verificaToken from '../middlewares/authMiddleware.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../config/swagger-output.json' assert { type: "json" };


const router = Router();



// Rotar de Criação de Pratos
router.post('/registrar/user', verificaToken.authUser, UserControllers.registrarUser);
router.post('/login/user', UserControllers.loginUser);


// Rotar de Criação de Pratos
router.post('/criar/prato', verificaToken.authUser, PratosControllers.createPrato);
// Rotar para Listrar Pratos
router.get('/listrar/pratos', PratosControllers.listPratos);
// Rotar para Listrar Prato Por IDs
router.get('/listrar/prato/:id', PratosControllers.listPrato);
// Rotar para Atualizar Prato Por IDs
router.put('/atualizar/prato/:id', verificaToken.authUser, PratosControllers.updatePrato);
// Rotar para Deletar Pedido Por IDs
router.delete('/deletar/prato/:id', verificaToken.authUser, PratosControllers.deletePrato);



// Rotas de Criação de Pedidos
router.post('/criar/pedidos', verificaToken.authUser, PedidosControllers.createPedido);
// Rotar para Listrar Pedidos
router.get('/listrar/pedidos', PedidosControllers.listPedidos);
// Rotar para Listrar Pedido Por IDs
router.get('/listrar/pedido/:id', PedidosControllers.listPedido);
// Rotar para Atualizar Pedido Por IDs
router.put('/atualizar/pedido/:id', verificaToken.authUser, PedidosControllers.updatePedido);
// Rotar para Deletar Pedido Por IDs
router.delete('/deletar/pedidos/:id', verificaToken.authUser, PedidosControllers.deletePedido);

// Rotas do Documentos da API
router.use('/doc', swaggerUi.serve);
router.get('/doc', swaggerUi.setup(swaggerDocument));



export { router };