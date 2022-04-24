import { Router } from 'express';
import data from './data.json'
import { Aluno } from '@src/models/Aluno';

const routerAluno = Router();

routerAluno.post('/registro', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.send(aluno);
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerAluno.get('/teste', (req,res) =>{
  res.send(data);
})

export default routerAluno;