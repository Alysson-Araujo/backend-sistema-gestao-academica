import { Router } from 'express';
import data from './data.json'
import {Disciplina} from "@models/Disciplina"
import db from '@database/index'
import { IDisciplina } from '@interfaces/IDisciplina';
const routerDisciplina = Router();

routerDisciplina.post('/registro_disciplina', async (req, res) => {
  try {
    
    const disciplina = await Disciplina.create(req.body); 
    res.send(disciplina);
  } catch (error) {
    res.status(400).send({ error: 'Falha no registro' });
  }
});

routerDisciplina.get('/teste', (req,res) =>{
  res.send(data);
})

export default routerDisciplina;