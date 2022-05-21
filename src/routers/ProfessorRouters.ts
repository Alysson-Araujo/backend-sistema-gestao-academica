import { Router } from 'express';
import { CreateProfessorUseCase } from '@src/use-cases/professor/create-professor-use-case';
import { PrismaProfessorRepository } from '@src/prisma/prisma-professor-repository';

const routerProfessor = Router();

routerProfessor.post('/registro-professor', async (req, res) => {
  try {
    const {
      dataNascimento,
      email,
      formacoes,
      nomeCompleto,
      nomeUsuario,
      senha,
    } = req.body;
    const professorRepository = new PrismaProfessorRepository();
    const createProfessorUseCase = new CreateProfessorUseCase(
      professorRepository
    );

    await createProfessorUseCase.execute({
      dataNascimento,
      email,
      formacoes,
      nomeCompleto,
      nomeUsuario,
      senha,
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerProfessor.get('/teste', (req, res) => {});

export default routerProfessor;
