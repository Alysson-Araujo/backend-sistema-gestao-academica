import { prisma } from '@src/prisma';
import bcryptjs from 'bcryptjs';
import {
  AlunoCreateData,
  AlunoDeleteData,
  AlunoUpdateData,
  AlunosRepository,
} from '@repositories/aluno-repository';

export class PrismaAlunosRepository implements AlunosRepository {
  async create({
    curso,
    dataNascimento,
    email,
    nomeCompleto,
    periodo,
    senha,
    nomeUsuario,
  }: AlunoCreateData) {
    //

    const hash = await bcryptjs.hash(senha, 10);

    var matricula = Math.floor(Math.random() * 1000000);

    const existsAluno = await prisma.aluno.findUnique({
      where: {
        matricula,
      },
    });

    while (existsAluno != null) {
      matricula = Math.floor(Math.random() * 1000000);
      console.log('tesde do loop!');
    }

    console.log('existe ou n ?' + existsAluno);

    await prisma.aluno.create({
      data: {
        nomeCompleto: `${nomeCompleto}`,
        dataNascimento: `${dataNascimento}`,
        nomeUsuario: `${nomeUsuario}`,
        email: `${email}`,
        senha: hash,
        matricula: matricula,
        turmasReprovadas: [],
        turmasAprovadas: [],
        turmasMatriculadas: [],
        periodo: periodo,
        curso: `${curso}`,
        //Turma:{create:[]} // talvez esteja correto
      },
    });
  }
  async remove({}: AlunoDeleteData) {}

  async update(data: AlunoUpdateData) {}
}
