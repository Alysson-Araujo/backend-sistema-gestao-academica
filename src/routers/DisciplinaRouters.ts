import { Router } from 'express';
import { PrismaDisciplinaRepository } from '@prisma-repository/prisma-disciplina-repository';
const routerDisciplina = Router();
import { CreateDisciplinaUseCase } from '@src/use-cases/disciplina/create-disciplina-use-case';

routerDisciplina.post('/registro-disciplina', async (req, res) => {
  try {
    const { nomeDisciplina, preRequisitos, quantidadeHoras } = req.body;
    const professorRepository = new PrismaDisciplinaRepository();
    const createProfessorUseCase = new CreateDisciplinaUseCase(
      professorRepository
    );

    await createProfessorUseCase.execute({
      nomeDisciplina,
      preRequisitos,
      quantidadeHoras,
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerDisciplina.get('/teste', (req, res) => {});

export default routerDisciplina;
