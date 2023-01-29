import {Injectable} from '@angular/core';
import {Celula} from "../models/Celula";


@Injectable({
  providedIn: 'root',
})
export class TabuleiroService {

  grid: Celula[][] = [];

  constructor() {
  }

  refresh(grid: Celula[][]) {
    this.grid = grid;
  }
}
