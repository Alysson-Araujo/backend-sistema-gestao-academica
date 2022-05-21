import { Router } from 'express';
import { PrismaAlunosRepository } from '@src/prisma/prisma-aluno-repository';
import { CreateAlunoUseCase } from '@src/use-cases/aluno/create-aluno-use-case';

const routerAluno = Router();

routerAluno.post('/registro-aluno', async (req, res) => {
  console.log('testeeeee');
  try {
    const {
      curso,
      dataNascimento,
      email,
      nomeCompleto,
      periodo,
      senha,
      nomeUsuario,
    } = req.body;
    const alunoRepository = new PrismaAlunosRepository();
    const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository);

    await createAlunoUseCase.execute({
      curso,
      dataNascimento,
      email,
      nomeCompleto,
      periodo,
      senha,
      nomeUsuario,
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerAluno.get('/teste', (req, res) => {});

export default routerAluno;
