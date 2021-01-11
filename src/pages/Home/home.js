import React, {Component} from "react";
import "../Home/home.css";
export default class Home extends Component{
    render(){
        return(
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="/">Home</a></li>
                            <li><a className="smoothscroll" href="/about">About</a></li>
                            <li><a className="smoothscroll" href="/works">Works</a></li>
                            <li><a className="smoothscroll" href="/contact">Contact Me</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                     <div className="banner-text">
                        <h1 className="responsive-headline">Welcome to <span> Mackenzie Grace Photography</span>.</h1>
                        <h3> I can shoot anything from portrait sessions to larger events. Message me for pricing inquires and information</h3>
                        <hr />
                        <ul className="social">
                        <li><a href="https://www.facebook.com/mackgracephoto/?view_public_for=510296192350499" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://twitter.com/_mmmbop" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/_mackgracephoto/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
                        </ul>
                     </div> 
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="/about"><i className="icon-down-circle" /></a>
                    </p>
                    
                </header>
                

        )
    }
}