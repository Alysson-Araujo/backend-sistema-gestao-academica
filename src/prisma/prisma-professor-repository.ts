import { prisma } from '@src/prisma';
import bcryptjs from 'bcryptjs';
import {
  ProfessorCreateData,
  ProfessorRemoveData,
  ProfessorRepository,
  ProfessorUpdateData,
} from '@repositories/professor-repository';

export class PrismaProfessorRepository implements ProfessorRepository {
  async create({
    dataNascimento,
    email,
    formacoes,
    nomeCompleto,
    senha,
    nomeUsuario,
  }: ProfessorCreateData) {
    //

    const hash = await bcryptjs.hash(senha, 10);

    var codigoProfessor = Math.floor(Math.random() * 10000000) + 1000000;

    const existsProfessor = await prisma.professor.findUnique({
      where: {
        codigoProfessor,
      },
    });

    while (existsProfessor != null) {
      codigoProfessor = Math.floor(Math.random() * 1000000);
    }

    await prisma.professor.create({
      data: {
        nomeCompleto: `${nomeCompleto}`,
        dataNascimento: `${dataNascimento}`,
        nomeUsuario: `${nomeUsuario}`,
        email: `${email}`,
        senha: hash,
        codigoProfessor: codigoProfessor,
        formacoes: formacoes,
        //Turma:{create:[]} // talvez esteja correto
      },
    });
  }
  async remove({}: ProfessorRemoveData) {}

  async update(data: ProfessorUpdateData) {}

  async findProfessorIdByCodigoProfessor(codigoProfessor: number) {
    const id = await prisma.professor.findUnique({
      where: {
        codigoProfessor,
      },
      select: {
        id: true,
      },
    });
    if (!id) return '';
    else return id.id.valueOf();
  }
  async professorExists(nomeProfessor: string, codigoProfessor: number) {
    const exists = await prisma.professor.findFirst({
      where: {
        nomeCompleto: nomeProfessor,
        codigoProfessor: codigoProfessor,
      },
      select: {
        id: true,
      },
    });
    if (!exists) {
      return false;
    } else return true;
  }
}
