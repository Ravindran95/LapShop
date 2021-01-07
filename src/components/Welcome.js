import lapicon1 from '../images/main1.png'
import lapicon2 from '../images/main2.gif'
import lapicon3 from '../images/main4.png'
import React, { Component } from "react";
export default class Welcome extends Component {
    render() {
       
        return (
            <div>
             <img className="imgbg" src={lapicon1} ></img>
             <img className="imgbg" src={lapicon2} ></img>
             <img className="imgbg" src={lapicon3} ></img>
             </div>
        );
    }
}
