interface TurmasMatriculadas {
    nomeTurma: string
    nota01: number
    nota02: number
}
interface TurmasRepro_Aprov {
    codTurma: string
    mediaFinal: number
}

export interface AlunoDeleteData{
    email:string,
    matricula:string
}

export interface AlunoUpdateData{
    email?:string,
    senha?:string
}

export interface AlunoCreateData {
    nomeCompleto: string,
    dataNascimento: string,
    nomeUsuario: string
    email: string,
    senha: string,
    periodo: number,
    curso: string,
}

export interface AlunosRepository {
    create: (data:AlunoCreateData) => Promise<void>
    remove: (data:AlunoDeleteData) => Promise<void>
    update: (data:AlunoUpdateData) => Promise<void>
}
