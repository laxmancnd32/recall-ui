import React, { Component } from 'react';
import { setAccessToken } from '../general-imports';
import ApplicationRouter from '../../router/router';
import "./login.scss";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          userName: '',
          password: '',
          accessToken: ''
      };
    }

    handleInputChange = event => {
            const userName = event.target.value;
            this.setState({ userName });
    }
    handlePasswordChange = event => {
        const password = event.target.value;
        this.setState({ password });
    };

    callLoginAPI = (userName, password) => {
        let form = new FormData();
        form.append("username", userName);
        form.append("password", password);
        const url =  "http://35.225.151.186/api/v1/login";

        fetch(url, {
            method: 'POST',
            body: form
        }).then(res =>  res.json()
        ).then(response =>{
            const { access } = response;
            this.setState({accessToken: access});
            setAccessToken(access);
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { userName, password } = this.state;
        this.callLoginAPI(userName,password);
      }

    render() {
        const { accessToken = '' } = this.state;

        if(accessToken==='') {
            return (
                <div className={"login-component"}>
                    <form onSubmit={this.handleSubmit}>
                        <label> Name: <input type="text" value={this.state.userName} onChange={this.handleInputChange} /></label>
                        <label> Password: <input type="password" value={this.state.password} onChange={this.handlePasswordChange} /></label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            );
        } else {
            return (<ApplicationRouter />);
        }
        
    }
  }
  
  export default Login;
  