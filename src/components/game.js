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

  handleClick() {
    
  }
}