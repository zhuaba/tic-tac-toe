import React, {Component} from "react";
import "./cube.css";

export default class Cube extends Component{
    render(){
        return (
            <button className="cube" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}