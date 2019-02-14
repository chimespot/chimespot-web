import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="Login">
                            <h1 className="center">chimespot</h1>

                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" required={true} placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" required={true} placeholder="Password" />
                                </div>
                                <div className="text-right">
                                    <a href="https://www.chimespot.com" className="btn btn-default">Cancel</a>
                                    <button type="submit" className="btn btn-primary">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
