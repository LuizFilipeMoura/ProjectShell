import { Injectable } from '@angular/core';
import { Carta, TIPO } from '../models/Carta';
import { Jogada } from '../models/Jogada';
import axios from "axios";
import {environment} from "../../environments/environment";

export enum CELULA {
  amiga,
  inimiga,
  neutra,
}

@Injectable({
  providedIn: 'root',
})
export class TabuleiroService {
  grid: Carta[][] = [];
  tamanhoX = 7;
  tamanhoY = 5;

  campoAmigo: CELULA[] = [];

  constructor() {
    for (let x = 0; x < this.tamanhoX; x++) {
      this.grid[x] = [];
      for (let y = 0; y < this.tamanhoY; y++) {
        this.grid[x][y] = new Carta();
      }
    }
  }

  aplicarJogada(jogada: Jogada) {
    const { x, y } = jogada.coordenada;
    if (!this.grid[x]) this.grid[x] = [];

    if (!this.grid[x][y]) this.grid[x][y] = new Carta();

    if (jogada.carta.tipo === TIPO.unidade) this.grid[x][y] = jogada.carta;
    if (jogada.carta.tipo === TIPO.efeito) {
      const carta = this.grid[x][y];
      eval(<string>jogada.carta.efeito);
    }
    this.verificaMorte();
  }

  private verificaMorte() {
    for (let x = 0; x < this.tamanhoX; x++) {
      for (let y = 0; y < this.tamanhoY; y++) {
        const carta: any = this.grid[x][y];
        if (carta.tipo == TIPO.unidade && carta.vida <= 0) {
          this.grid[x][y] = new Carta();
        }
      }
    }
  }

  async jogadaValida(jogada: Jogada) {
    const a = await axios.post(environment.apiUrl + '/tabuleiro/validar', jogada)
    console.log(a)
    return false;
  }
}
