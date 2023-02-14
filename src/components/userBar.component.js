import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';
export default class UserBar extends  Component{



    render(){

        return (
            <div id="userBar" className="clearfix bg-dark">
                <div class="btn-group float-start">
                    <Link to="/userLanding/:userId"><button type="button" className="btn btn-success">User Home</button></Link>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only"></span>
                    </button>
                    <div className="dropdown-menu bg-info">
                        <Link to="/profile/:userId" className="dropdown-item" href="#">Profile</Link>
                    </div>
                    </div>
                <button id="logout" className="float-end btn btn-warning" formAction='/logout'>Logout</button>
            </div>
        );
        
    }
}