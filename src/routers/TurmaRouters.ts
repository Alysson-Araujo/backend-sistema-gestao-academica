import { PrismaAlunosRepository } from '@src/prisma/prisma-aluno-repository';
import { PrismaDisciplinaRepository } from '@src/prisma/prisma-disciplina-repository';
import { PrismaProfessorRepository } from '@src/prisma/prisma-professor-repository';
import { PrismaTurmaRepository } from '@src/prisma/prisma-turma-repository';
import { AddAlunoTurmaUseCase } from '@src/use-cases/turma/add-aluno-turma-use-case';
import { CreateTurmaUseCase } from '@src/use-cases/turma/create-turma-use-case';
import { DeleteTurmaUseCase } from '@src/use-cases/turma/detele-turma-use-case';
import { Router } from 'express';

const routerTurma = Router();

routerTurma.post('/turma/registrer', async (req, res) => {
  try {
    const { nomeTurma, codigoProfessor, semestreDaTurma, nomeDisciplina } =
      req.body;
    const turmaRepository = new PrismaTurmaRepository();
    const disciplinaRepository = new PrismaDisciplinaRepository();
    const createTurmaUseCase = new CreateTurmaUseCase(
      turmaRepository,
      disciplinaRepository
    );

    await createTurmaUseCase.execute({
      codigoProfessor,
      nomeDisciplina,
      nomeTurma,
      semestreDaTurma,
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha ao remover turma' });
  }
});

routerTurma.delete('/turma/delete', (req, res) => {
  try {
    const { codigoProfessor, nomeTurma, NomeDisciplina, nomeProfessor } =
      req.body;

    const turmaRepository = new PrismaTurmaRepository();
    const disciplinaRepository = new PrismaDisciplinaRepository();
    const professorRepository = new PrismaProfessorRepository();
    const deleteTurmaUseCase = new DeleteTurmaUseCase(
      turmaRepository,
      disciplinaRepository,
      professorRepository
    );

    deleteTurmaUseCase.execute({
      NomeDisciplina,
      codigoProfessor,
      nomeProfessor,
      nomeTurma,
    });
    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha ao remover turma' });
  }
});

routerTurma.put('/turma/add-Aluno', (req, res) => {
  try {
    const { codigoTurma,matriculaAluno } =
      req.body;

    const turmaRepository = new PrismaTurmaRepository();
    const alunoRepository = new PrismaAlunosRepository();
    const deleteTurmaUseCase = new AddAlunoTurmaUseCase(
      turmaRepository,
      alunoRepository,
    );

    deleteTurmaUseCase.execute({
      codigoTurma,
      matriculaAluno
    });
    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: 'Falha ao remover turma' });
  }
})
export default routerTurma;
