import { Router } from 'express';
import data from './data.json';
import { Aluno } from '@src/models/Aluno';
import { AlunoController } from '@controllers/AlunoController';
import { AlunoRequest } from '@src/DTO/AlunoRequest';
import { PrismaClient, Prisma } from '@prisma/client';
import { Turma } from '@models/Turma';

const routerAluno = Router();

routerAluno.post('/registro', async (req, res) => {
  try {
    // const alunoReg = new AlunoRequest(req.body);
    // const jsonTest = JSON.stringify(alunoReg);
    const prisma = new PrismaClient();
    // let alunoInput: Prisma.AlunoCreateInput
    // alunoInput = JSON.parse(jsonTest)

    const alunoReg = new AlunoRequest(req.body);
    console.log(alunoReg);

    const aluno = await prisma.turma.create({
      data: {
        mediaTurma: 0.0,
        nomeTurma: 'Matemática discreta - A03',
        semestreDaTurma: '2021.1',
        alunoID: [392103],
        codigoProfessor: 1231,
        codigoDisciplina: '62847700ddee7a5422bb88d4',
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

routerAluno.get('/teste', (req, res) => {
  res.send(data);
});

export default routerAluno;
