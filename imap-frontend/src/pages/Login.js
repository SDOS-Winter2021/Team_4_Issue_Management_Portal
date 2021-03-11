import React, {Component} from 'react';
import './Login.css';
import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header/Header.js';
import GoogleButton from 'react-google-button';

export default class Login extends Component {
  render(){
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
                      <GoogleButton />
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