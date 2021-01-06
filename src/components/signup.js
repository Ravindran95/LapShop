import React, { Component } from "react";
class SignUp extends Component {
    StoreData(e) {
        e.preventDefault();
        const fname=e.target.elements.fname.value;
        const lname=e.target.elements.lname.value;
        const email=e.target.elements.email.value;
        const pass=e.target.elements.pass.value;
        
       if(fname!==""&&lname!==""&&email!==""&&pass!==""){
        localStorage.setItem('fname', JSON.stringify(fname));
        localStorage.setItem('lname', JSON.stringify(lname));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('pass', JSON.stringify(pass));
        const val=1;
        if(val)
        {
            alert("Register success");
            this.props.history.push("sign-in");
        }
    }
    else
    {
        alert("Registration failed");
    }
      }
    render() {
        return (
            <form onSubmit={this.StoreData.bind(this)}>
                <div className="outer">
             
             <div className="inner">
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="fname"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lname"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="pass"/>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">log in?</a>
                </p>
                </div>
                </div>
            </form>
        );
    }
}
export default SignUp;