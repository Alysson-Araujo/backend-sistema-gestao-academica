import {
    TurmaAddAluno,
    TurmaRepository,
  } from '@repositories/turma-repository';
import { AlunosRepository } from '@src/repositories/aluno-repository';
  
  export class AddAlunoTurmaUseCase {
    constructor(
      private turmaRepository: TurmaRepository,
      private alunoRepository: AlunosRepository
    ) {}
  
    async execute(request: TurmaAddAluno) {
      const { codigoTurma,matriculaAluno } =
        request;
  
      if (!codigoTurma) {
        throw new Error('codigoTurma is required');
      }
      if (!matriculaAluno) {
        throw new Error('matriculaAluno is required');
      }
      
  
      // verificar se já existe a disciplina no banco de dados
      const existsTurma =
        await this.turmaRepository.existsTurma(codigoTurma);
    
        if(!existsTurma){
            throw new Error("Turma not found.")
        }
    
        const idAluno =  await this.alunoRepository.findAlunoIdByMatricula(matriculaAluno)
        if(idAluno.length == 0){
            throw new Error("Aluno not found.")
        }
      // Verificar se todos os preRequisitos estão cadastrados
  
     await this.turmaRepository.addAlunoTurma({
         codigoTurma,
         matriculaAluno
     })
    }
  }
  