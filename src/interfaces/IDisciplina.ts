import { Schema } from 'mongoose';

export interface IDisciplina {
  nomeDisciplina: String;
  codigoDisciplina: Schema.Types.ObjectId;
  preRequisitos: String[];
  quantidadeHoras: Number;
}
