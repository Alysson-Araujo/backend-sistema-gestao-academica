import { Schema } from 'mongoose';
import { IProfessor } from '@src/interfaces/IProfessor';
import mongoose from 'mongoose';

export const professorSchema = new Schema<IProfessor>({
  nomeCompleto: {
    type: String,
    required: true,
  },
  nomeUsuario: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: true,
    select: false, // Isso é muito importante, pois evita que quando nós fizermos buscas dentro do banco de dados a senha não venha junto
  },
  codigoProfessor: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
});

export const Professor = mongoose.model('Professor', professorSchema);
