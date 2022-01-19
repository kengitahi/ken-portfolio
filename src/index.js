import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Import Components
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer.js";

function App() {
    return (
        <div className="main-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));