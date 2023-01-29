import { Injectable } from '@angular/core';


export class Espaco {
  temCarta: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TabuleiroService {

  grid:Espaco[][] = [];
  constructor() {
  }

  refresh(grid: Espaco[][]) {
    this.grid = grid;
  }
}
