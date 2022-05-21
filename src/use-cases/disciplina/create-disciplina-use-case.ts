import {
  DisciplinaCreateData,
  DisciplinaRepository,
} from '@repositories/disciplina-repository';

export class CreateDisciplinaUseCase {
  constructor(private disciplinaRepository: DisciplinaRepository) {}

  async execute(request: DisciplinaCreateData) {
    const { nomeDisciplina, preRequisitos, quantidadeHoras } = request;

    if (!nomeDisciplina) {
      throw new Error('nomeDisciplina is required');
    }
    if (!preRequisitos) {
      throw new Error('preRequisitos is required');
    }
    if (!quantidadeHoras) {
      throw new Error('email is required');
    }

    // verificar se já existe a disciplina no banco de dados
    const existsDisciplina: object =
      await this.disciplinaRepository.findDisciplinaByNomeDisciplina(
        nomeDisciplina
      );

    console.log(existsDisciplina);

    if (Object.keys(existsDisciplina).length != 0) {
      throw new Error(`Disciplina ${nomeDisciplina} already exists!`);
    }

    // Verificar se todos os preRequisitos estão cadastrados

    const existsPreRequisitos =
      await this.disciplinaRepository.findAllPreRequisitosId(preRequisitos);

    if (existsPreRequisitos.length != preRequisitos.length) {
      throw new Error('Pre requisito not exists!');
    }

    await this.disciplinaRepository.create({
      nomeDisciplina,
      preRequisitos,
      quantidadeHoras,
    });
  }
}
