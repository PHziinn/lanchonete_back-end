import { Router } from 'express';
import PratosControllers from '../controllers/PedidosControllers.js';


const router = Router();


// Rotas de Criação de Pedidos
router.post('/', PedidosControllers.createPedido);
// Rotar para Listrar Pedidos
router.get('/', PedidosControllers.listPedidos);
// Rotar para Listrar Pedido Por IDs
router.get('/:id', PedidosControllers.listPedido);
// Rotar para Atualizar Pedido Por IDs
router.put('/:id', PedidosControllers.updatePedido);
// Rotar para Deletar Pedido Por IDs
router.delete('/:id', PedidosControllers.deletePedido);




export default router;
