import { prisma } from '@src/prisma';
import {
  DisciplinaCreateData,
  DisciplinaRemoveData,
  DisciplinaRepository,
  DisciplinaUpdateData,
  IdDisciplina,
} from '@repositories/disciplina-repository';

export class PrismaDisciplinaRepository implements DisciplinaRepository {
  async create({
    nomeDisciplina,
    preRequisitos,
    quantidadeHoras,
  }: DisciplinaCreateData) {
    const elementsFind = await this.findAllPreRequisitosId(preRequisitos);

    const elementsId: string[] = [];

    for (let id of elementsFind) {
      elementsId.push(id.codigoDisciplina.valueOf());
    }

    await prisma.disciplina.create({
      data: {
        nomeDisciplina: nomeDisciplina,
        quantidadeHoras: quantidadeHoras,
        preRequisitos: elementsId,
        //Turma:{create:[]} // talvez esteja correto
      },
    });
  }

  async remove({ codigoDisciplina, nomeDisciplina }: DisciplinaRemoveData) {}

  async update({
    preRequisitos,
    quantidadeHoras,
    nomeDisciplina,
  }: DisciplinaUpdateData) {}

  async findDisciplinaByNomeDisciplina(nomeDisciplina: string) {
    const disciplina = await prisma.disciplina.findFirst({
      where: {
        nomeDisciplina,
      },
    });
    if (!disciplina) return {};
    else return disciplina;
  }

  async findDisciplinaIdByNomeDisciplina(nomeDisciplina: string) {
    const id = await prisma.disciplina.findFirst({
      where: {
        AND: { nomeDisciplina },
      },
      select: {
        codigoDisciplina: true,
      },
    });

    if (!id) return '';
    else return id.codigoDisciplina.valueOf();
  }

  async findAllPreRequisitosId(preRequisitos: string[]) {
    const disciplinasId = [];

    for (let index = 0; index < preRequisitos.length; index++) {
      disciplinasId.push({
        nomeDisciplina: preRequisitos[index],
      });
    }

    return await prisma.disciplina.findMany({
      where: {
        OR: disciplinasId,
      },
      select: {
        codigoDisciplina: true,
      },
    });
  }
}
