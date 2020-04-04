import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import dashboard from "../src/components/DashBoard/dashboard.js";
import Navbar from "../src/components/NavBar/appNavbar.js";
import Toppanel from "../src/components/TopPanelStats/Toppanel.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <header className="App-header">
          <Toppanel />
          <Route exact path='/' component={dashboard}></Route>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
