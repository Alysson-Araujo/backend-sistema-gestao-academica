import {
  TurmaRemoveData,
  TurmaRepository,
} from '@repositories/turma-repository';
import { DisciplinaRepository } from '@src/repositories/disciplina-repository';
import { ProfessorRepository } from '@src/repositories/professor-repository';

export class DeleteTurmaUseCase {
  constructor(
    private turmaRepository: TurmaRepository,
    private disciplinaRepository: DisciplinaRepository,
    private professorRepository: ProfessorRepository
  ) {}

  async execute(request: TurmaRemoveData) {
    const { NomeDisciplina, codigoProfessor, nomeProfessor, nomeTurma } =
      request;

    if (!NomeDisciplina) {
      throw new Error('nomeDisciplina is required');
    }
    if (!codigoProfessor) {
      throw new Error('codigoProfessor is required');
    }
    if (!nomeTurma) {
      throw new Error('nomeTurma is required');
    }
    if (!nomeProfessor) {
      throw new Error('nomeProfessor is required');
    }

    // verificar se já existe a disciplina no banco de dados
    const existsDisciplina =
      await this.disciplinaRepository.findDisciplinaByNomeDisciplina(
        NomeDisciplina
      );

    const existsProfessor =
      await this.professorRepository.findProfessorIdByCodigoProfessor(
        codigoProfessor
      );
    if (!existsProfessor) {
      throw new Error(`Professor not found`);
    }
    if (Object.keys(existsDisciplina).length == 0) {
      throw new Error(`Disciplina ${NomeDisciplina} not found!`);
    }

    // Verificar se todos os preRequisitos estão cadastrados

    await this.turmaRepository.remove({
      codigoProfessor,
      NomeDisciplina,
      nomeProfessor,
      nomeTurma,
    });
  }
}
