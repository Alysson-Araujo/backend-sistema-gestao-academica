export interface ProfessorCreateData {
  nomeCompleto: string;
  dataNascimento: string;
  nomeUsuario: string;
  email: string;
  senha: string;
  formacoes: string[];
}

export interface ProfessorUpdateData {
  email: string;
  senha: string;
  formacoes: string[];
}

export interface ProfessorRemoveData {
  email: string;
  senha: string;
  codigoProfessor: string;
}

export interface ProfessorRepository {
  create: (data: ProfessorCreateData) => Promise<void>;
  remove: (data: ProfessorRemoveData) => Promise<void>;
  update: (data: ProfessorUpdateData) => Promise<void>;
  findProfessorIdByCodigoProfessor: (
    codigoProfessor: number
  ) => Promise<string>;
  professorExists: (
    nomeProfessor: string,
    codigoProfessor: number
  ) => Promise<boolean>;
}
