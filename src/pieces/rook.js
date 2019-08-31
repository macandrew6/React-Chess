import Piece from './piece';

export default class Rook extends Piece {
  constructor(player) {
    super(player, (player === 1 ?
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" :
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
  }

  isPossibleMove(src, dest) {
    let mod = src % 8;
    let diff = 8 - mod;
    return (
      Math.abs(src - dest) % 8 === 0 || 
      (dest >= (src - mod) && dest < (src + diff))
    );
  }

  getSrcToDestPath(src, dest) {
    let path = [], pathStart, pathEnd, incrementBy;
    if (src > dest) {
      pathStart = dest;
      pathEnd = src;
    } else {
      pathStart = src;
      pathEnd = dest;
    }
    if (Math.abs(src - dest) % 8 === 0) {
      incrementBy = 8;
      pathStart += 8;
    } else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i+=incrementBy) {
      path.push(i);
    }
    return path;
  }
}