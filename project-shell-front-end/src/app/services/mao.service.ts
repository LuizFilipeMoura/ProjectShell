import { Injectable } from '@angular/core';
import {Mao} from "../models/Mao";


@Injectable({
  providedIn: 'root',
})
export class MaoService {

  mao: Mao = new Mao();
  constructor() {
  }

  refresh(mao: Mao) {
    this.mao = mao;
    console.log(mao)
  }
}
