import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';

export default class EventItems extends  Component{

    validated(){

    }



    render(){
        return(      
        <div className="container">
        <Navbar/>
        <UserBar/><h2> Here in Contact</h2>
        </div>
        );
        
    }
}