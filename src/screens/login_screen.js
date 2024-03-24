import React, { useState } from "react";
import "./login_screen.css";
import SignUnScreen from "./signUp_screen";

function LoginScreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="netflixlog.png"
          alt="netflixlogo"
        />
        <button onClick={() => setsignIn(true)} className="loginscreen__button">
          sign in
        </button>
        <div className="loginscreen__gradient" />
        <div className="loginscreen__body">
          {signIn ? (
            <SignUnScreen />
          ) : (
            <>
              <h1>Unilimited films, TV programmes and more.</h1>
              <h2>watch anywhere, cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setsignIn(true)}
                    className="loginscreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
