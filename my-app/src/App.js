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
                <div className="no-margin">
                    <img
                        className="banner"
                        src="/background6.jpg"
                        alt="building"
                    />
                </div>
                <Projects />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
