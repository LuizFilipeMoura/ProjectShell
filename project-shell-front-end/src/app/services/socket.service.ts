import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { Jogada } from '../models/Jogada';
import { CELULA, TabuleiroService } from './tabuleiro.service';
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
      this.tabuleiroService.aplicarJogada(jogada);
    });
    socket.on('definirCampo', (numeroJogador: number) => {
      if (numeroJogador % 2 === 0) {
        this.tabuleiroService.campoAmigo = [
          CELULA.amiga,
          CELULA.amiga,
          CELULA.neutra,
          CELULA.inimiga,
          CELULA.inimiga,
        ];
      } else {
        this.tabuleiroService.campoAmigo = [
          CELULA.inimiga,
          CELULA.inimiga,
          CELULA.neutra,
          CELULA.amiga,
          CELULA.amiga,
        ];
      }
    });
  }
  jogarCarta(jogada: Jogada) {
    socket.emit('jogouCarta', jogada);
  }
}
