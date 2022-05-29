import { prisma } from '@src/prisma';
import { PrismaDisciplinaRepository } from '@prisma-repository/prisma-disciplina-repository';
import { PrismaProfessorRepository } from '@prisma-repository/prisma-professor-repository';

import {
  TurmaAddAluno,
  TurmaCreateData,
  TurmaRemoveAlunoData,
  TurmaRemoveData,
  TurmaRepository,
  TurmaUpdateData,
} from '@repositories/turma-repository';
import { PrismaAlunosRepository } from './prisma-aluno-repository';

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
        codigoTurma:""
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

    const codProfessor =
      await prismaProfessorRepository.findProfessorIdByCodigoProfessor(
        codigoProfessor
      );

    const idDisciplina =
      await prismaDisciplinaRepository.findDisciplinaIdByNomeDisciplina(
        NomeDisciplina
      );
    const idTurma = await prisma.turma.findFirst({
      where: {
        codigoDisciplina: idDisciplina,
        codigoProfessor: codProfessor,
      },
      select: {
        id: true,
      },
    });

    await prisma.turma.delete({ where: { id: idTurma?.id } });
  }
  async removeTurmaAluno(matriculaAlunos: number) {}
  
  async updateTurmaMedia(data: TurmaUpdateData) {}
  async updateTurmaProfessor(codigoProfessor: string) {}

  async addAlunoTurma ({codigoTurma,matriculaAluno}: TurmaAddAluno) {
    const prismaAlunoRepository = new PrismaAlunosRepository();

    const idAluno = await prismaAlunoRepository.findAlunoIdByMatricula(matriculaAluno)
    
    await prisma.turma.update({
      where:{
        codigoTurma,
      },
      data:{
        alunosId:{
          push:idAluno
        }
      }
    })
  }

  async existsTurma(codigoTurma: string) {
    const turma = await prisma.turma.findUnique({
      where:{
        codigoTurma
      },
    })
    return turma ? true : false
  }
}
