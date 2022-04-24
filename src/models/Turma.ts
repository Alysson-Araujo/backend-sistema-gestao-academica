import { ITurma } from '@src/interfaces/ITurma';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const turmaSchema = new Schema<ITurma>({
  numeroTurma: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  alunosMatriculados: [
    {
      matriculaAluno: {
        type: Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true,
      },
    },
  ],
  codigoProfessor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Professor',
  },
  semestreDaTurma: {
    type: String,
    required: true,
  },
  mediaTurma: {
    type: Number,
  },
  codigoDisciplina: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const Turma = mongoose.model('Turma', turmaSchema);
