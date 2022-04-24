/**No momento não estou usando IUser */

export interface IUser {
  nomeCompleto: string;
  nomeUsuario: string;
  email: string;
  senha: string;
  dataNascimento: Date;
  createdAt: Date;
  lastLogin: Date;
}
