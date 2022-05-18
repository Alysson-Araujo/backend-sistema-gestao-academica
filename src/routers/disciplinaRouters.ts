import { Router } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const routerAluno = Router();

routerAluno.post('/registro_disciplina', async (req, res) => {
  try {
    // const alunoReg = new AlunoRequest(req.body);
    // const jsonTest = JSON.stringify(alunoReg);
    const prisma = new PrismaClient();
    // let alunoInput: Prisma.AlunoCreateInput
    // alunoInput = JSON.parse(jsonTest)

    const aluno = await prisma.disciplina.create({
      data: {
        nomeDisciplina: 'Matematica Discreta',
        quantidadeHoras: 64,
        preRequisitos: ['Matemática básica'],
        Turma: { create: [] },
        // talvez esteja correto
      },
    });

    // if(!Aluno.findOne({nomeUsuario:`${alunoReg.getNomeUsuario}`})){
    //  Aluno.create(alunoReg);
    //   res.send(alunoReg);
    // }
    res.send(aluno);
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerAluno.get('/teste', (req, res) => {});

export default routerAluno;
