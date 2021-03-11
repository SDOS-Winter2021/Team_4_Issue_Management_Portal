import React, { Component} from 'react';
import './Footer.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="main-footer">
                <div className="container">
                    <p className="college"> <b>Instructions </b> : <br />*Use IIIT-D Account to Login to the Issue Management Portal. <br />*If you cannot access your account kindly contact Admin BTech.</p>
                    {/* <hr />
                    <center>
                    <p className="copyright"> Copyright &copy; 2021. IIIT-Delhi, Website : <a href="https://iiitd.ac.in"> https://iiitd.ac.in </a></p>
                    </center> */}
                </div>
            </div>
        )
    }
}