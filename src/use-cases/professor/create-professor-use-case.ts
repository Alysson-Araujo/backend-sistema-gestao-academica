import {
  ProfessorCreateData,
  ProfessorRepository,
} from '@repositories/professor-repository';

export class CreateProfessorUseCase {
  constructor(private alunoRepository: ProfessorRepository) {}

  async execute(request: ProfessorCreateData) {
    const {
      dataNascimento,
      email,
      formacoes,
      nomeCompleto,
      nomeUsuario,
      senha,
    } = request;

    if (!formacoes) {
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

    if (!senha) {
      throw new Error('senha is required');
    }

    await this.alunoRepository.create({
      dataNascimento,
      email,
      formacoes,
      nomeCompleto,
      nomeUsuario,
      senha,
    });
  }
}
