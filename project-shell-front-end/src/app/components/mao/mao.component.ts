import {Component, OnInit} from '@angular/core';
import {MaoService} from "../../services/mao.service";
import {Carta} from "../../models/Carta";
import {Jogada} from "../../models/Jogada";
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-mao',
  templateUrl: './mao.component.html',
  styleUrls: ['./mao.component.css']
})
export class MaoComponent implements OnInit {

  constructor(public maoService: MaoService, public socketService: SocketService) {
  }

  ngOnInit(): void {
  }

  arrastouCarta($event: DragEvent, carta: Carta, indexCarta: number) {
    const elements = document.querySelectorAll(':hover');
    let [x1, y1] = elements.item(elements.length - 1).id;
    const x = Number(x1);
    const y = Number(y1);
    const jogada: Jogada = {carta, coordenada: {x, y}};
    this.socketService.jogarCarta(jogada);
  }
}
