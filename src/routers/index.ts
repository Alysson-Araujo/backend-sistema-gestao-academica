import routerAluno from './AlunoRouters';
import { Router } from 'express';
import routerProfessor from './ProfessorRouters';
import routerDisciplina from './DisciplinaRouters';
import routerTurma from './TurmaRouters';

const router = Router();

router.use(routerProfessor);
router.use(routerAluno);
router.use(routerDisciplina);
router.use(routerTurma);
export default router;
