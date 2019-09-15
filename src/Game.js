import React, {Component} from 'react';
import App from "./App";

export default class Game extends Component{
    constructor(){
        super();
        this.state = {
            history: [{
                cubes: Array(9).fill(null),
            }],
            stepNum: 0,
            isXNext: true,
        }
    }

    jumpTo (step){
        const history = this.state.history;
        this.setState({
            stepNum: step,
            isXNext: (step % 2) ? false : true,
            history: history.slice(0, step + 1)
        });
    }

    handleClick (i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1);
        const cubes = history[history.length - 1].cubes;
        const arr = cubes.slice();
        if(calculateWinner(arr) || arr[i]){
          return;
        }
        arr[i] = this.state.isXNext ? "X" : "O";
        this.setState({
          history: history.concat([{cubes: arr}]),
          isXNext: !this.state.isXNext,
          stepNum: history.length,
        });
    }

    render(){
        const {history, isXNext} = this.state;
        const cubes = history[this.state.stepNum].cubes;
        const winner = calculateWinner(cubes);
        let recommendText = winner ? 
            "Winner: " + winner :
            "the next player is  " + (isXNext ? "X" : "O");
        const moves = history.map((item, index) => {
            const desc = index ? "Move #" + index : "Game start~";
            return (
                <li key={index}>
                    <a href="#" onClick={()=>this.jumpTo(index)}>{desc}</a>
                </li>
            ) 
        })
        return (
            <div>
                <App cubes = {cubes}
                     onClick = {(i) => this.handleClick(i)}
                />
                <div>
                    <div>{recommendText}</div>
                    <div>{moves}</div>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  