import React, {Component} from "react";

export default class About extends Component{
    render(){
        return(
            <React.Fragment>
                <section id ="about"> 
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
                                        <a href="/contact" className="button"><i className="fas fa-envelope-open-text" />Contact Me!</a>
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