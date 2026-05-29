export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  link: string;
}

export interface Competencia {
  frontEnd: string[];
  backEnd: string[];
}

export interface Contato {
  email: string;
  telefone: string;
  linkedin: string;
  github: string;
}