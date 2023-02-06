import { Outlet } from "react-router-dom";

import './App.css';
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
      </header>
      <div className="App-main">
         <Outlet />
      </div>
    </div>
  );
}

export default App;
