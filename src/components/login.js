import React, { Component } from "react";
export default class Login extends Component {
    Validate(e)
    {
        e.preventDefault();
        const email=e.target.elements.email.value;
        const pass=e.target.elements.pass.value;
        const check_email = JSON.parse(localStorage.getItem('email'));
        const check_pass = JSON.parse(localStorage.getItem('pass'));
        if(email===check_email && pass===check_pass){
            this.props.history.push("Shop");
           
        }
        else
        {
          alert("login failed");
        }
    }
    render() {
       
        return (
            <form onSubmit={this.Validate.bind(this)}>
             <div className="bgl">
             <div className="outer">
             
                 <div className="inner">
                <h3>Log in</h3>

                <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control"  placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="pass"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
                </div>
                </div>
            </form>
            
        );
    }
}
