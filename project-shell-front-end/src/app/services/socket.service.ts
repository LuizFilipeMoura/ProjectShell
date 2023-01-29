import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {environment} from '../../environments/environment';
import {Jogada} from '../models/Jogada';
import {Espaco, TabuleiroService} from './tabuleiro.service';
import {Mao} from "../models/Mao";
import {MaoService} from "./mao.service";

export let socket: Socket;


@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(public tabuleiroService: TabuleiroService, public maoService: MaoService) {
  }

  conectar(room: string = '10') {
    socket = new Socket({
      url: environment.socketUrl,
      options: {
        query: {
          room,
        },
      },
    });
    socket.connect();
    socket.emit('connection', {teste: 'asdasd'})
    socket.on('refreshGrid', (grid: Espaco[][]) => this.tabuleiroService.refresh(grid))
    socket.on('refreshMao', (mao: Mao) => this.maoService.refresh(mao))

  }

  jogarCarta(jogada: Jogada) {
    socket.emit('jogouCarta', jogada);
  }
}
