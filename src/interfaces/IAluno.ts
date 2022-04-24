import { IDisciplina } from './IDisciplina';
import { ITurma } from './ITurma';
import { IUser } from './IUser';

export interface IAluno extends IUser {
  matricula: Number;
  turmasMatriculadas: [
    {
      turma: ITurma;
      nota01: Number;
      nota02: Number;
    }
  ];
  turmasConcluidas: [
    {
      turma: ITurma;
      mediaFinal: Number;
    }
  ];
  turmasReprovadas: [
    {
      turma: ITurma;
      mediaFinal: Number;
    }
  ];
  periodo: Number;
  curso: String;
}
