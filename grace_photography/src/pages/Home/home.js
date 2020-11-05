import React, {Component} from "react";

export default class Home extends Component{
    render(){
        return(
                <header id="home">
                    <nav id="nav-bar">
                        <a className="mobile-btn" href="#nav-bar" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        </ul>
                    </nav>
                </header>

        )
    }
}