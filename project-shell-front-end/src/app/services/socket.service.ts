import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { Jogada } from '../models/Jogada';
import { TabuleiroService } from './tabuleiro.service';
export let socket: Socket;

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(public tabuleiroService: TabuleiroService) {}

  conectar() {
    socket = new Socket({
      url: environment.socketUrl,
    });
    socket.connect();
    socket.on('jogouCarta', (jogada: Jogada) => {
      this.tabuleiroService.aplicarJogada(jogada)
    });
  }
  jogarCarta(jogada: Jogada) {
    socket.emit('jogouCarta', jogada);
  }

  // listen event
}
