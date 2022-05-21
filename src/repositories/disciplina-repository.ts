export interface DisciplinaCreateData {
  nomeDisciplina: string;
  preRequisitos: string[];
  quantidadeHoras: number;
}

export interface DisciplinaUpdateData {
  preRequisitos: string[];
  nomeDisciplina: string;
  quantidadeHoras: number;
}

export interface DisciplinaRemoveData {
  nomeDisciplina: string;
  codigoDisciplina: string;
}

export interface IdDisciplina {
  codigoDisciplina?: string;
}

export interface DisciplinaRepository {
  create: (data: DisciplinaCreateData) => Promise<void>;
  remove: (data: DisciplinaRemoveData) => Promise<void>;
  update: (data: DisciplinaUpdateData) => Promise<void>;
  findDisciplinaByNomeDisciplina: (nomeDisciplina: string) => Promise<{}>;
  findAllPreRequisitosId: (preRequisitos: string[]) => Promise<Object[]>;
  findDisciplinaIdByNomeDisciplina: (nomeDisciplina: string) => Promise<String>;
}
