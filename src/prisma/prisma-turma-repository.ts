import { prisma } from '@src/prisma';
import { PrismaDisciplinaRepository } from '@prisma-repository/prisma-disciplina-repository';
import { PrismaProfessorRepository } from '@prisma-repository/prisma-professor-repository';

import {
  TurmaCreateData,
  TurmaRemoveAlunoData,
  TurmaRemoveData,
  TurmaRepository,
  TurmaUpdateData,
} from '@repositories/turma-repository';

export class PrismaTurmaRepository implements TurmaRepository {
  async create({
    codigoProfessor,
    nomeDisciplina,
    nomeTurma,
    semestreDaTurma,
  }: TurmaCreateData) {
    const prismaProfessorRepository = new PrismaProfessorRepository();
    const prismaDisciplinaRepository = new PrismaDisciplinaRepository();

    const disciplinaId =
      await prismaDisciplinaRepository.findDisciplinaIdByNomeDisciplina(
        nomeDisciplina
      );
    const professorId =
      await prismaProfessorRepository.findProfessorIdByCodigoProfessor(
        codigoProfessor
      );

    await prisma.turma.create({
      data: {
        mediaTurma: 0,
        nomeTurma,
        semestreDaTurma,
        alunosId: [],
        codigoDisciplina: disciplinaId,
        codigoProfessor: professorId,
      },
    });
  }
  async remove({
    NomeDisciplina,
    codigoProfessor,
    nomeProfessor,
    nomeTurma,
  }: TurmaRemoveData) {
    const prismaDisciplinaRepository = new PrismaDisciplinaRepository();
    const prismaProfessorRepository = new PrismaProfessorRepository();

    const idDisciplina =
      await prismaDisciplinaRepository.findDisciplinaIdByNomeDisciplina(
        NomeDisciplina
      );

    await prisma.turma.delete({ where: { id: idDisciplina } });
  }
  async removeTurmaAluno(matriculaAlunos: number) {}
  async updateTurmaMedia(data: TurmaUpdateData) {}
  async updateTurmaProfessor(codigoProfessor: string) {}
}
