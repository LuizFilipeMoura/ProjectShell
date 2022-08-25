import { Injectable } from '@angular/core';
import { Carta, TIPO } from '../models/Carta';
import { Jogada } from '../models/Jogada';

@Injectable({
  providedIn: 'root',
})
export class TabuleiroService {
  grid: Carta[][] = [];
  constructor() {}

  aplicarJogada(jogada: Jogada) {
    const { x, y } = jogada.coordenada;
    if (!this.grid[x]) this.grid[x] = [];

    if (!this.grid[x][y]) this.grid[x][y] = new Carta();

    if (jogada.carta.tipo === TIPO.unidade) this.grid[x][y] = jogada.carta;
    if (jogada.carta.tipo === TIPO.efeito) {
      const carta = this.grid[x][y];
      eval(<string>jogada.carta.efeito);
      console.log(carta)
    }
  }
}
