import { Router } from 'express';
import PratosControllers from '../controllers/PratosControllers.js';
import PedidosControllers from '../controllers/PedidosControllers.js';

const router = Router();

// Rotar de Criação de Pratos
router.post('/criar/prato', PratosControllers.createPrato);
// Rotar para Listrar Pratos
router.get('/listrar/pratos', PratosControllers.listPratos);
// Rotar para Listrar Prato Por IDs
router.get('/listrar/prato/:id', PratosControllers.listPrato);
// Rotar para Atualizar Prato Por IDs
router.put('/atualizar/prato/:id', PratosControllers.updatePrato);
// Rotar para Deletar Pedido Por IDs
router.delete('/deletar/prato/:id', PratosControllers.deletePrato);




// Rotas de Criação de Pedidos
router.post('/criar/pedidos', PedidosControllers.createPedido);
// Rotar para Listrar Pedidos
router.get('/listrar/pedidos', PedidosControllers.listPedidos);
// Rotar para Listrar Pedido Por IDs
router.get('/listrar/pedido/:id', PedidosControllers.listPedido);
// Rotar para Atualizar Pedido Por IDs
router.put('/atualizar/pedido/:id', PedidosControllers.updatePedido);
// Rotar para Deletar Pedido Por IDs
router.delete('/deletar/pedidos/:id', PedidosControllers.deletePedido);



export { router };