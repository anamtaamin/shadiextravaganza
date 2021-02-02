import React from "react";
import { NavLink } from "react-router-dom";

const Contact=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <h1>
            Reach us at <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKjRRPSljHpTbwHhJrwmZxcQWxFSmqxlWXScDFDZNrNhcDkzGdJFdczDWmctnWGXNSKGtdM">our mail box</a>
            <br/>
            or 
            <br/> call us at <a href="tel:7661001010">766-100-1010</a>

        </h1>

        </div>

        </div>

        </div>
        </>
    );
};

export default Contact;