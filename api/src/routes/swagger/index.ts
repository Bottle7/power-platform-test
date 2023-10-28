import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './options';

const router = Router();
const specs = swaggerJsdoc(swaggerOptions);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
