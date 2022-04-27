import routerAluno from './userRouters'
import { Router } from 'express'
import routerDisciplina from './disciplinaRouters';

const router = Router();

router.use(routerAluno);
router.use(routerDisciplina)

export default router;