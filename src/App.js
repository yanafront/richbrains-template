import './App.scss';
import Logo from "./components/common/parts/Logo/Logo";
import { BrowserRouter, Route } from 'react-router-dom';
import React from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/common/sidebar/Sidebar";


function App() {
  return (
    <div className="app">
        <header className="app-header">
            <Logo/>
        </header>
        <div className="app-content">
            <Sidebar />
            <BrowserRouter>
                <Route exact path="/" component={HomePage} />
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
