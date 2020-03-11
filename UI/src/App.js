import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import "./Nav.css";
import Home from "./Home";
import Services from "./Services";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Footer />
                <nav>
                    <ul className="list">
                        <li className="Home">
                            <Link to="/"> Home </Link>
                        </li>
                        <li className="Services">
                            <Link to="/Services"> Services </Link>
                        </li>
                        <li className="About">
                            <Link to="/AboutMe"> About Me </Link>
                        </li>
                        <li className="Contact">
                            <Link to="/ContactMe"> Contact Me </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/ContactMe">
                        <ContactMe />
                    </Route>
                    <Route path="/AboutMe">
                        <AboutMe />
                    </Route>
                    <Route path="/Services">
                        <Services />
                    </Route>
                    <Route path="/">
                    <Home height='74.5vh' images={['Bathroom.jpg', 'Kitchen.jpg', 'Livingroom.jpg', 'Dining.jpg', 'Ceiling.jpg']} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;