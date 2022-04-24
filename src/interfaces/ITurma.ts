import { Schema } from 'mongoose';

export interface ITurma {
  numeroTurma: Number ;
  alunosMatriculados: [
    {
      matriculaAluno: Number;
    }
  ];
  codigoProfessor: Number;
  semestreDaTurma: String;
  mediaTurma: Number;
  codigoDisciplina: Number;
  createdAt: Date;
}
