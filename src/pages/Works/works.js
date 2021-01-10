import React, {Component} from "react";

export default class Work extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="portfolio">
                     <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-bar" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li><a className="smoothscroll" href="/">Home</a></li>
                            <li><a className="smoothscroll" href="/about">About</a></li>
                            <li className="current"><a className="smoothscroll" href="/works">Works</a></li>
                            <li><a className="smoothscroll" href="/contact">Contact Me</a></li>
                        </ul>
                    </nav>
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Here are some examples of my works!</h1>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}