import { Router } from 'express';
import { AlunoRequest } from '@src/DTO/AlunoRequest';
import { PrismaClient, Prisma } from '@prisma/client';


const routerAluno = Router();

routerAluno.post('/registro_professor', async (req, res) => {
  try {
    // const alunoReg = new AlunoRequest(req.body);
    // const jsonTest = JSON.stringify(alunoReg);
    const prisma = new PrismaClient()
    // let alunoInput: Prisma.AlunoCreateInput
    // alunoInput = JSON.parse(jsonTest)
    
    const aluno = await prisma.professor.create({
      data:{
        curso:"engenharia",
        nomeCompleto:"Carlos Renato Gomes",
        dataNascimento:"16/01/1990",
        email:"carlosrenat@contato.com",
        senha:"teste123 sem cripto",
        codigoProfessor:1231,
        Turma:{create:[]}
        // talvez esteja correto
      }
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

routerAluno.get('/teste', (req,res) =>{

})


export default routerAluno;