import React from 'react';

import '../index.css';
import Square from './square';

export default class Board extends React.Component {
  renderSquare(i, squareShade) {
    return (
      <Square 
        piece={this.props.squares[i]}
        style={this.props.squares[i] ? this.props.squares[i].style : null}
        shade={squareShade}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        
      }
    }
  }
}