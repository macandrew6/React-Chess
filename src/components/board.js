import React from 'react';

import '../index.css';
import Square from './square';

export default class Board extends React.Component {
  renderSquare(i, squareShade) {
    console.log(this.props.squares[i]);
    return <Square 
      key={i}
      piece={this.props.squares[i]}
      style={this.props.squares[i] ? this.props.squares[i].style : null}
      shade={squareShade}
      onClick={() => this.props.onClick(i)}
    />
    
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ?
        "light-square" : "dark-square";
        squareRows.push(this.renderSquare((i * 8) + j, squareShade));
      }
      board.push(<div className="board-row">{squareRows}</div>);
    }
    
    return (
      <div>{board}</div>
    );
  }
}

function isEven(n) {
  return n % 2 === 0;
}