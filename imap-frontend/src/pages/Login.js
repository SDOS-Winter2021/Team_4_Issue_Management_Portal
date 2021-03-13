import React, {Component} from 'react';
import './Login.css';
import axios from 'axios';
import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header/Header.js';
import GoogleButton from 'react-google-button';
import GoogleLogin from 'react-google-login';

const responseSuccessGoogle = (response) => {
  axios({
    method: "POST", 
    url: "http://localhost:5000/api/googlelogin",
    data: {tokenId : response.tokenId},
  }).then(response => {
    console.log("response",response);
  });
}

const responseErrorGoogle = (response) => {

}

export default class Login extends Component {

  render(){
    const customStyle = {
      textAlign:'center',
      alignItems:'center',
      borderRadius: '90px',
        justifyContent: "center",
     }
    return (
      <div className="page-container">
          <Header />
          <div className="content-wrap">
            <div className="container-fluid">
              <div className="row main-content">
                <div className="company__info">
                  <h1 className="company_title">Issue Management Portal</h1>
                  <h1 className="company_title">Welcome Back!</h1>
                </div>
                <div className="login_form">
                  <div className="container-fluid">
                    <div className="invisibletext">
                      <p>Issue Management Portal</p>
                      <p>Welcome Back!</p>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                    <GoogleLogin
                      render={renderProps => (
                          <GoogleButton onClick={renderProps.onClick}/>
                      )}
                      clientId="xxx"
                      buttonText="Login with google"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}