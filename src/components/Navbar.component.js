import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 


export default class Navbar extends  Component{



    render(){

        return (
        <nav className="navbar   bg-primary text-white">
            <div className="container-fluid">
                <Link to="/" className = "btn">Home</Link>
                <Link to="/showEvents" className="btn">Show Events</Link>
                <Link to="/showVols" className="btn">Show Volunteers</Link>
                <Link to="/contact" className="btn">Contact Us</Link>
                <Link to="/api" className="btn">API</Link>    
            </div>
        </nav>          
        );
    }
}