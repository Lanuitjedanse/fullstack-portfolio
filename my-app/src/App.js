import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <img
                    className="banner"
                    src="https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80"
                    alt="building"
                />

                <Projects />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
