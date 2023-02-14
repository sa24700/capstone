import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';

export default class ApiPage extends  Component{

    validated(){

    }



    render(){
        return(      
        <div className="container">
        <Navbar/>
        <UserBar/><h2> Here in API</h2>
        </div>
        );
        
    }
}