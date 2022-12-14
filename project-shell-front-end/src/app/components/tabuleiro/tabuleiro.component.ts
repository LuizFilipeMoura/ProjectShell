import { Component, OnInit } from '@angular/core';
import { Carta } from '../../models/Carta';
import { SocketService } from '../../services/socket.service';
import { deckCompleto } from '../../data/data';
import { Jogada } from '../../models/Jogada';
import { CELULA, TabuleiroService } from '../../services/tabuleiro.service';
import {MatDialog} from "@angular/material/dialog";
import {ModalRoomComponent} from "../modal-room/modal-room.component";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css'],
})
export class TabuleiroComponent implements OnInit {
  constructor(
    public socketService: SocketService,
    public tabuleiroService: TabuleiroService,
    public dialog: MatDialog
  ) {}

  altura: number[] = [];
  largura: number[] = [];
  CELULA = CELULA;
  mao: Carta[] = [];

  ngOnInit(): void {
    this.mao = deckCompleto;
    this.altura = new Array(this.tabuleiroService.tamanhoY)
      .fill(1)
      .map((data, index) => index);
    this.largura = new Array(this.tabuleiroService.tamanhoX)
      .fill(1)
      .map((data, index) => index);
    this.dialog.open(ModalRoomComponent).afterClosed().subscribe(next => this.entrarSala(next))
  }
  entrarSala(room: string){
    this.socketService.conectar(room);
  }

  arrastouCarta($event: DragEvent, carta: Carta, indexCarta: number) {
    const elements = document.querySelectorAll(':hover');
    let [x1, y1] = elements.item(elements.length - 1).id;
    const x = Number(x1);
    const y = Number(y1);
    const jogada: Jogada = { carta, coordenada: { x, y } };

    if (isNaN(x) || isNaN(y) || !this.tabuleiroService.jogadaValida(jogada)) {
      return;
    }
    this.mao.splice(indexCarta, 1);

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
