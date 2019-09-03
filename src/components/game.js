import React from 'react';
import '../index.css';
import Board from './board';
import FallenSoldiers from './fallenSoldiers';
import initalizeChessBoard from '../helpers/initializeChessBoard';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initalizeChessBoard(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      sourceSelection: -1,
      status: '',
      turn: 'white'
    };
  }

  handleClick(i) {
    const squares = this.squares.slice();

    if(this.state.sourceSelection === -1) {
      if(!squares[i] || squares[i].player !== this.state.player) {
        this.setState({status: "Wrong selection. Choose player " + 
        this.state.player + " pieces."});
        squares[i] ? delete squares[i].style.backgroundColor : null;
      } else {
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111, 143, 114)"}
        
      }
    }
  }
}