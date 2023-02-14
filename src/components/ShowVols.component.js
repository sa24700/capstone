import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';

export default class ShowVols extends  Component{

    constructor(props){
        super(props);

        this.state = {


        }
    }

    render(){
        return(      
        <div className="container">
        <Navbar/>
        <UserBar/><h2> Here in Show Volunteers</h2>
        </div>
        );
        
    }
}