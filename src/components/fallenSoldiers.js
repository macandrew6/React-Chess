import React from 'react';
import '../index.css';
import Square from './square';

export default class FallenSoldiers extends React.Component {
  renderSquare(square, i, squareShade) {
    return (
      <Square
        key={i}
        piece={square}
        style={square.style}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">{
          this.props.whiteFallenSoldiers.map((ws, i) => this.renderSquare(ws, i))
        }</div>
        <div className="board-row">{
          this.props.blackFallenSoldiers.map((bs, i) => this.renderSquare(bs, i))
        }</div>
      </div>
    );
  }
}