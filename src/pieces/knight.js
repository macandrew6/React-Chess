import Piece from './piece';

export default class Bishop extends Piece {
  constructor(piece) {
    super(piece, (piece === 1 ?
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" :
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
  }
}