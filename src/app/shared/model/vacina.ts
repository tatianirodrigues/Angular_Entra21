import { Pessoa } from './pessoa';
export class Vacina{
  id: number;
	paisOrigem: string;
	estagioPesquisa: number;
	dataInicioPesquisa: Date;
	pesquisadorResponsavel: Pessoa;
}
