import Piece from './piece';

export default class King extends Piece {
  constructor(player) {
    super(player, (player === 1 ? 
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : 
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }

  isPossibleMove(src, dest) {
    return (
      src - 9 === dest ||
      src - 8 === dest ||
      src + 1 === dest ||
      src + 9 === dest ||
      src + 8 === dest ||
      src + 7 === dest ||
      src - 1 === dest
    );
  }

  getSrcToDestPath(src, dest) {
    return [];
  }
}