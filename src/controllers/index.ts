import routerAluno from './userRouters'
import { Router } from 'express'

const router = Router();

router.use(routerAluno);

export default router;