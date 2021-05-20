import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  let nameClass;

  History.location === "/about"
    ? (nameClass = "footer-about")
    : (nameClass = "footer-about");
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="main-box">
              <div className="no-margin">
                <img className="banner" src="/background2.jpg" alt="building" />
              </div>
              <Projects />
            </div>
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer className={nameClass} />
      </div>
    </Router>
  );
}

export default App;
