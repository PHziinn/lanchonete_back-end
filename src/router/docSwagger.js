import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../config/swagger-output.json' assert { type: "json" };
const router = Router();



router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));




export default router;