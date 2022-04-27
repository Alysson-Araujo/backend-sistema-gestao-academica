
import { IAluno } from '../interfaces/IAluno';
import db from 'mongoose';
import bcryptjs from 'bcryptjs';

export const alunoSchema = new db.Schema<IAluno>({
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
  },
  matricula: {
    type: Number,
    required: true,
  },
  turmasMatriculadas: [
    {
      turma: {
        type: db.Schema.Types.Number,
        ref: 'Turma.numeroTurma',
        required: true,
      },
      nota01: {
        type: Number,
      },
      nota02: {
        type: Number,
      },
    },
  ],
  turmasConcluidas: [
    {
      turma: {
        type: db.Schema.Types.Number,
        ref: 'Turma.numeroTurma',
        required: true,
      },
      mediaFinal: {
        type: Number,
        required: true,
      },
    },
  ],
  turmasReprovadas: [
    {
      turma: {
        type: db.Schema.Types.Number,
        ref: 'Turma.numeroTurma',
        required: true,
      },
      mediaFinal: {
        type: Number,
        required: true,
      },
    },
  ],
  periodo: {
    type: Number,
    default: 1,
    required: true,
  },
  curso: {
    type: String,
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


// o pre é uma função do mongoose que é responsável fazer algo
// antes de salvar, por exemplo.
/**Bem, antes de salvarmos um Aluno ou Professor, precisamos criptografar a senha deles.
 * Para isso, vamos usar o bcryptjs para fazer a encriptação da senha.
 */

// alunoSchema.pre('save', async (next)=>{
//   const hash = await bcryptjs.hash(this.senha, 10);
//    = hash;
//   next();
// })

export const Aluno = db.model('Aluno', alunoSchema);
