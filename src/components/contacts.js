import React, { Component } from "react";
export default class Contact extends Component {
    render() {
       
        return (
             <div className="cont">
            <div className="inner">
            <div className="form-group">
            <p className="p">Enter Your Email</p>
            <input type="email" className="form-control" placeholder="Enter email" name="email"/>
            <p className="p">Please Enter Your Queries</p>
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            <div class="text-right">
  	<button type="button" class="btn btn-primary">Submit</button>
</div>
        </div>
        </div>
        </div>
        );
    }
}
