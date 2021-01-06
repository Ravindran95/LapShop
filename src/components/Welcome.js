import lapicon from '../images/3.jpg'
import React, { Component } from "react";
export default class Welcome extends Component {
    render() {
       
        return (
            <div>
             <img className="imgbg" src={lapicon} ></img>
             </div>
        );
    }
}
