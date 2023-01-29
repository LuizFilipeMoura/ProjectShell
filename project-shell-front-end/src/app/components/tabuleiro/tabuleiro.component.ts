import {Component, OnInit} from '@angular/core';
import {Espaco, TabuleiroService} from "../../services/tabuleiro.service";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit {

  grid: Espaco[][] = [];

  constructor(public service: TabuleiroService) {
  }

  ngOnInit(): void {
    // this.grid = this.service.grid;
    // console.log(this.grid)
  }

}
