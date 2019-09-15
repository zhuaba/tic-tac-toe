import React from 'react';
import Cube from "./Cube";
import "./App.css";


export default class App extends React.Component{

  getCube = (i) => {
    return <Cube value={this.props.cubes[i]} 
      onClick={() => this.props.onClick(i)}
    />
  }

  render(){
    return (
      <div >
        <div className="row">
          {this.getCube(0)}
          {this.getCube(1)}
          {this.getCube(2)}
        </div>
        <div className="row">
          {this.getCube(3)}
          {this.getCube(4)}
          {this.getCube(5)}
        </div>
        <div className="row">
          {this.getCube(6)}
          {this.getCube(7)}
          {this.getCube(8)}
        </div>
      </div>
    )
  }


}

