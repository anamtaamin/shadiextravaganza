import React from "react";

import { NavLink } from "react-router-dom";
const About=()=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <p className="p">
                                We provide all the services of the wedding viz. food, set, staff, decorations, place of your choice,
                                destinaton weddings etc.
                                In simple words All you need to worry about is <i>yourself</i>
                            </p> 
                                <div className="mg-3">
                                        <NavLink to="/services" className="btn-get-started">
                                        What we provide
                                        </NavLink>
                                </div>
                                
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;