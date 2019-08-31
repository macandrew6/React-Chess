export default class Piece {
  constructor(player, iconURL) {
    this.player = player;
    this.style = {backgroundImage: `url(${iconURL})`};
  }
}