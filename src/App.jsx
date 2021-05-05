import React from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import { useStateValue } from "./components/StateProvider";

// import Comments from "./components/Comments";
// import 'semantic-ui-css/semantic.min.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  if (!user) {
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
