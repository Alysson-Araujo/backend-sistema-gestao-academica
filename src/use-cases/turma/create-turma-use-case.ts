import {
  TurmaCreateData,
  TurmaRepository,
} from '@repositories/turma-repository';
import { DisciplinaRepository } from '@src/repositories/disciplina-repository';

export class CreateTurmaUseCase {
  constructor(
    private turmaRepository: TurmaRepository,
    private disciplinaRepository: DisciplinaRepository
  ) {}

  async execute(request: TurmaCreateData) {
    const { nomeDisciplina, codigoProfessor, nomeTurma, semestreDaTurma } =
      request;

    if (!nomeDisciplina) {
      throw new Error('nomeDisciplina is required');
    }
    if (!codigoProfessor) {
      throw new Error('codigoProfessor is required');
    }
    if (!nomeTurma) {
      throw new Error('nomeTurma is required');
    }
    if (!semestreDaTurma) {
      throw new Error('semestreDaTurma is required');
    }

    // verificar se já existe a disciplina no banco de dados
    const existsDisciplina: object =
      await this.disciplinaRepository.findDisciplinaByNomeDisciplina(
        nomeDisciplina
      );

    if (Object.keys(existsDisciplina).length == 0) {
      throw new Error(`Disciplina ${nomeDisciplina} not found!`);
    }

    // Verificar se todos os preRequisitos estão cadastrados

    await this.turmaRepository.create({
      codigoProfessor,
      nomeDisciplina,
      nomeTurma,
      semestreDaTurma,
    });
  }
}
