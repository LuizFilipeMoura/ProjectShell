import { Component, OnInit } from '@angular/core';
import { Carta } from '../../models/Carta';
import { SocketService } from '../../services/socket.service';
import { deckCompleto } from '../../data/data';
import { Jogada } from '../../models/Jogada';
import { TabuleiroService } from '../../services/tabuleiro.service';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css'],
})
export class TabuleiroComponent implements OnInit {
  constructor(
    public socketService: SocketService,
    public tabuleiroService: TabuleiroService
  ) {}

  altura: number[] = [];
  largura: number[] = [];
  tamanhoX = 7;
  tamanhoY = 5;
  mao: Carta[] = [];

  ngOnInit(): void {
    this.mao = deckCompleto;
    this.socketService.conectar();
    this.altura = new Array(this.tamanhoY).fill(1).map((data, index) => index);
    this.largura = new Array(this.tamanhoX).fill(1).map((data, index) => index);
  }

  arrastouCarta($event: DragEvent, carta: Carta, indexCarta: number) {
    const elements = document.querySelectorAll(':hover');
    let [x1, y1] = elements.item(elements.length - 1).id;
    const x = Number(x1);
    const y = Number(y1);

    this.mao.splice(indexCarta, 1);
    const jogada: Jogada = { carta, coordenada: { x, y } };

    this.socketService.jogarCarta(jogada);
  }

  verificaCelula(x: number, y: number) {
    return (
      this.tabuleiroService.grid &&
      this.tabuleiroService.grid[x] &&
      this.tabuleiroService.grid[x][y]
    );
  }
}
