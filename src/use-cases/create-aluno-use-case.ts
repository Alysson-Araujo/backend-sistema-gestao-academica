import {
  AlunoCreateData,
  AlunosRepository,
} from '@repositories/aluno-repository';

export class CreateAlunoUseCase {
  constructor(private alunoRepository: AlunosRepository) {}

  async execute(request: AlunoCreateData) {
    const { curso, dataNascimento, email, nomeCompleto, periodo, senha,nomeUsuario } =
      request;

    if (!curso) {
      throw new Error('curso is required');
    }
    if (!dataNascimento) {
      throw new Error('dataNascimento is required');
    }
    if (!email) {
      throw new Error('email is required');
    }
    if (!nomeCompleto) {
      throw new Error('nomeCompleto is required');
    }
    if (!periodo) {
      throw new Error('periodo is required');
    }
    if (!senha) {
      throw new Error('senha is required');
    }


    await this.alunoRepository.create({
      curso,
      dataNascimento,
      email,
      nomeCompleto,
      periodo,
      senha,
      nomeUsuario
    });
  }
}
