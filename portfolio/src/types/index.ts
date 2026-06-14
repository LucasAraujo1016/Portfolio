export interface Projeto {
  id: number;
  titulo: string;
  subtitulo: string;
  semestre: string;
  status: string;
  cliente: string;
  descricao: string;
  imagem: string;
  link: string;
  tecnologias: string[];
  contribuicoes: string[];
  hardSkills: string;
  softSkills: string[];
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