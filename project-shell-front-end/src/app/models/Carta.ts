export class Carta{
  id?: string | number;
  titulo?: string;
  dano?: number;
  vida?: number;
  efeito?: string;
  tipo?: TIPO;
  style?: any;
}
export enum TIPO {
  unidade,
  efeito
}
