import React, {Component} from "react";
import "../Contact/contact.css";

export default class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="contact">
                <nav id="nav-bar">
                        <a className="mobile-btn" href="#nav-bar" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="/">Home</a></li>
                            <li><a className="smoothscroll" href="/works">Works</a></li>
                            <li><a className="smoothscroll" href="/contact">Contact Me</a></li>
                        </ul>
                    </nav>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Reach Out To Me For More Information!</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">This is a test!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns">
                            <form action method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name: <span className="required"></span></label>
                                        <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email: <span className="required"></span></label>
                                        <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject: </label>
                                        <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message: <span className="required"></span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                            <span id="image-loader">
                                                <img alt="" src="images/loader.gif" />
                                            </span>
                                    </div>
                                </fieldset>
                            </form>
                            <div id="message-warning"> Error Message!</div>
                            <div id="message-success">
                            <i className="fa fa-check" />Your message was sent, thank you!<br />
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}