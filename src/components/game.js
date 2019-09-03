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
    const squares = this.state.squares.slice();

    if(this.state.sourceSelection === -1) {
      if(!squares[i] || squares[i].player !== this.state.player) {
        this.setState({status: "Wrong selection. Choose player " + 
        this.state.player + " pieces."});
        squares[i] ? delete squares[i].style.backgroundColor : null;
      } else {
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111, 143, 114)"}
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        })
      }
    } else if(this.state.sourceSelection > -1) {
      delete squares[this.state.sourceSelection].style.backgroundColor;
      if(squares[i] && squares[i].player === this.state.player) {
        this.setState({
          status: "Wrong selection. Choose valid source and destination again",
          sourceSelection: -1
        });
      } else {
        const squares = this.state.squares.slice();
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
        const isDestEnemyOccupied = squares[i] ? true : false;
        const isMovePossible = squares[this.state.sourceSelection]
          .isPossibleMove(this.state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[this.state.sourceSelection]
          .getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);

        if(isMovePossible && isMoveLegal) {
          if(squares[i] !== null) {
            if(squares[i].player === 1) {
              whiteFallenSoldiers.push(squares[i]);
            } else {
              blackFallenSoldiers.push(squares[i]);
            }
          }
          console.log("whiteFallenSoldier", whiteFallenSoldiers)
          console.log("blackFallenSoldier", blackFallenSoldiers)
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === 'white' ? 'black' : 'white';
          this.setState({
            sourceSelection: -1,
            squares: squares,
            whiteFallenSoldiers: whiteFallenSoldiers,
            blackFallenSoldiers: blackFallenSoldiers,
            player: player,
            status: '',
            turn: turn
          })
        } else {
          this.setState({
            status: "Wrong selection, Choose valid source and destination again.",
            sourceSelection: -1
          })
        }
      }
    }
  }
}