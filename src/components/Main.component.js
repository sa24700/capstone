import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';

export default class Main extends  Component{

    render(){
       return( 
        <div className="container">
        <Navbar/>
        <UserBar/>
        <h2 classname="bg-primary">Hello from  Main</h2>
        <article>
            <p>
            Euismod sociosqu mattis hac purus ultricies porttitor tempor aliquet dignissim fames posuere eget. 
            Ipsum elit tortor, facilisis parturient lorem. Primis facilisi aliquam interdum praesent phasellus 
            dapibus at class nascetur. Conubia iaculis duis tempus, phasellus aliquet platea litora eros commodo! 
            Habitasse felis mollis vehicula risus dictumst montes commodo neque pretium. Sociosqu justo.
            </p>
        </article>
        <h3>Lorem Ipsum</h3>
        <article>
            <p>
            Euismod sociosqu mattis hac purus ultricies porttitor tempor aliquet dignissim fames posuere eget. 
            Ipsum elit tortor, facilisis parturient lorem. Primis facilisi aliquam interdum praesent phasellus 
            dapibus at class nascetur. Conubia iaculis duis tempus, phasellus aliquet platea litora eros commodo! 
            Habitasse felis mollis vehicula risus dictumst montes commodo neque pretium. Sociosqu justo.
            </p>
            <p>
            Euismod sociosqu mattis hac purus ultricies porttitor tempor aliquet dignissim fames posuere eget. 
            Ipsum elit tortor, facilisis parturient lorem. Primis facilisi aliquam interdum praesent phasellus 
            dapibus at class nascetur. Conubia iaculis duis tempus, phasellus aliquet platea litora eros commodo! 
            Habitasse felis mollis vehicula risus dictumst montes commodo neque pretium. Sociosqu justo.
            </p>
        </article>
        </div>);
    }
}