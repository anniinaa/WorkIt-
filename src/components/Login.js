import React from "react";
import { Button } from "@material-ui/core/";
import { auth, provider } from "./firebase";
import { actionTypes } from "../components/reducer";
import { useStateValue } from "../components/StateProvider";
import logo from "../images/wt.png";


function Login() {
    
const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in
        auth
        .signInWithPopup(provider)
        .then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div>
            <center>
            <img className="mainlogo" src={logo}></img>
            </center><center>
                <h1 className="frontHeader">Talk about it</h1>
            <Button className="nappula" type="submit" onClick={signIn}>
                Login
            </Button>
            </center>
        </div>
    )
}

export default Login;