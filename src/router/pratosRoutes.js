import { Router } from 'express';
import PratosControllers from '../controllers/PratosControllers.js';
import verificaToken from '../middlewares/authMiddleware.js'

const router = Router();


// Rotar de Criação de Pratos
router.post('/', verificaToken.authUser, PratosControllers.createPrato);
// Rotar para Listrar Pratos
router.get('/', PratosControllers.listPratos);
// Rotar para Listrar Prato Por IDs
router.get('/:id', PratosControllers.listPrato);
// Rotar para Atualizar Prato Por IDs
router.put('/:id', verificaToken.authUser, PratosControllers.updatePrato);
// Rotar para Deletar Pedido Por IDs
router.delete('/:id', verificaToken.authUser, PratosControllers.deletePrato);


export default router;