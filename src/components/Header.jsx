import { Button} from "@material-ui/core";
import React from "react";
import logo from "../images/worktalk.png"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SimplePopover from "./ModalNotes";
import { logOut } from "./firebase";


function Header() {

  return (
    <div className="header">
      <header className="nav-bar">
        <div className="logo">
          <img src={logo} alt=""/>
          <div className="noteBtn">
           <SimplePopover />
          </div>
        <div className="OpenMenu">
             <Button onClick={logOut}>
               EXIT <ExitToAppIcon/>
            </Button>
        </div>
        </div>
      </header>
    </div>
    
  );
}

export default Header;
