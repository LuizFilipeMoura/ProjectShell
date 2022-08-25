import {Carta, TIPO} from '../models/Carta';

export const deckCompleto: Carta[] = [
  {
    id: 1,
    titulo: 'Guerreiro',
    dano: 5,
    vida: 15,
    tipo: TIPO.unidade,
    style: {
      background: 'red',
    },
  },
  {
    id: 2,
    titulo: 'Benção',
    efeito: 'carta.dano += 8',
    tipo: TIPO.efeito,
    style: {
      background: 'blue',
    },
  },
  {
    id: 3,
    titulo: 'Amaldiçoar',
    tipo: TIPO.efeito,
    style: {
      background: 'yellow',
    },
  },
];
