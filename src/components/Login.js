import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

function Login() {
  return (
    <div id="login-page">
      <Fade top>
        <div id="login-card">
          <h2 className="login-header">
            <Fade left cascade>
              Welcome to Let'schat
            </Fade>
          </h2>
          <Bounce bottom cascade>
            <div
              className="login-button google"
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              }
            >
              <GoogleOutlined />
              Sign In with google
            </div>
          </Bounce>

          <br />
          <br />
          <Bounce bottom cascade>
            <div
              className="login-button facebook"
              onClick={() =>
                auth.signInWithRedirect(
                  new firebase.auth.FacebookAuthProvider()
                )
              }
            >
              <FacebookOutlined /> Sign In with Facebook
            </div>
          </Bounce>
        </div>
      </Fade>
    </div>
  );
}

export default Login;
