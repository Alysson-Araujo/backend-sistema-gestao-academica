import { Schema } from 'mongoose';

export interface IDisciplina {
  nomeDisciplina: String;
  codigoDisciplina: Number;
  preRequisitos:[{
    codigoDisciplina:Number;
  }];
  quantidadeHoras: Number;
}
