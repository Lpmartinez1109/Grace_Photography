import React, {Component} from "react";

export default class About extends Component{
    render(){
        return(
            <React.Fragment>
                <section id ="about"> 
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li><a className="smoothscroll" href="/">Home</a></li>
                            <li className="current"><a className="smoothscroll" href="/about">About</a></li>
                            <li><a className="smoothscroll" href="/works">Works</a></li>
                            <li><a className="smoothscroll" href="/contact">Contact</a></li>
                            
                        </ul>
                    </nav>
                    <div className="row">
                        <div className=" three columns">
                            <image className="profile-pic" src="" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Mackenzie Grace Photography</h2>
                            <p>I can shoot anything from portrait sessions to larger events. Message me for pricing inquires and information</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>To Be Filled Out</span><br />
                                        <span>To Be Filled Out</span><br />
                                        <span>To Be Filled Out</span><br />
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="/contact" className="button"><i className="fa fa-envelope" />Contact Me!</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
};