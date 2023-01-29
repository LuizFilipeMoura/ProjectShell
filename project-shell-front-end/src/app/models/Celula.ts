import {Carta} from "./Carta";

export class Celula{
  tipo: TIPO_CELULA;
  minion: Carta;
  style: string;
}
export enum TIPO_CELULA {
  red,
  blue,
  neutra,
}
