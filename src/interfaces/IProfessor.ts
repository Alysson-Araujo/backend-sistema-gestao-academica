import { IDisciplina } from './IDisciplina';
import { IUser } from './IUser';
import { Schema } from 'mongoose';

export interface IProfessor extends IUser {
  codigoProfessor: Schema.Types.ObjectId;
  turmasEmAndamento: Schema.Types.ObjectId[];
  turmasEncerradas: Schema.Types.ObjectId[];
}
