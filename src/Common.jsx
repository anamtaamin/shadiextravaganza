import React from "react";

import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                 {props.name} 
                                 <strong className="navbar-brand">Shadi Extravganza</strong>       
                                </h1>
                                <h3 className="my-3 shadows">
                                        kya kare Qaazi, jab miya biwi raazi!
                                </h3>
                                <div className="mg-3">
                                        <NavLink to="/services" className="btn-get-started">
                                        {props.btname}
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

export default Common;