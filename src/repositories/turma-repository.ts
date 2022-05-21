export interface TurmaCreateData {
  nomeTurma: string;
  codigoProfessor: number;
  semestreDaTurma: string;
  nomeDisciplina: string;
}

export interface TurmaUpdateData {
  matriculasAlunos?: string[];
  mediaTurma?: number;
  nomeTurma?: string;
  codigoProfessor?: string;
}

export interface TurmaRemoveData {
  codigoProfessor: number;
  nomeTurma: string;
  NomeDisciplina: string;
  nomeProfessor: string;
}

export interface TurmaRemoveAlunoData {
  matriculaAluno: string;
}

export interface TurmaRepository {
  create: (data: TurmaCreateData) => Promise<void>;
  remove: (data: TurmaRemoveData) => Promise<void>; //*
  updateTurmaProfessor: (codigoProfessor: string) => Promise<void>; //*
  removeTurmaAluno: (matriculaAlunos: number) => Promise<void>; //*
  updateTurmaMedia: (data: TurmaUpdateData) => Promise<void>; //*
}
