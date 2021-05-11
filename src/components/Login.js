import React from "react";
import { Button } from "@material-ui/core/";
import { auth, provider } from "./firebase";
import { actionTypes } from "../components/reducer";
import { useStateValue } from "../components/StateProvider";
import logo from "../images/wt.png";
import slogan from "../images/slogan.png";

function Login() {
  const date = new Date();
  const year = date.getFullYear();

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="slogan-row">
        <img className="slogan" src={slogan}></img>
        <p>Workit makes it easy to keep track of your daily tasks and stay connected. Get started today!</p>
      </div>
      <center>
        <img className="mainlogo" src={logo}></img>
      </center>
      <center>
        <Button id="nappula" type="submit" onClick={signIn}>
          Login
        </Button>
      </center>
      <div className="footer">
        <footer className="login-footer">
          <p>Anniina Aarnio, Gerald Lee & Tuukka Ervasti {year}</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
