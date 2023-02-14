import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';
import axios from 'axios';

const Event = props => (
    
    <article>
    <h2>Hello</h2>
    <div> {props.newEvent["eventName"]}{props.newEvent['startTime']}{props.newEvent['endTime']}</div>
    <div>{props.newEvent['extraInfo']}</div>
    <div><button id="deleteEvent" onClick={() => props.innerDelete(props.newEvent['_id'])} value="X"></button></div>
</article>
)


export default class ShowEvents extends  Component{
    constructor(props){
        super(props);

        this.onChangeEvents = this.onChangeEvents.bind(this);

        this.state = {
            events: []

        }
    }

    onChangeEvents(e){
        this.setState({ events : e.target.value});
    }

    deleteEvent(id ){
        const innerDelete = (id) =>{

        var test = id;
        return console.log(test);
        }

    }

    displayEvents( ){
        console.log("here is the state of events " + this.state.events)
        return this.state.events.map(element => {
           
            return <Event newEvent={element} innerDelete={this.innerDelete} eventID={element['_id']}/>;
        });
    }
    componentDidMount(){
        var userId = "test";
        
        axios.get('http://localhost:8080/showAllEvents/').then( res => {
             console.log("hre " + res.data);
              this.setState({events: res.data})
        })
    }

    render(){
        return(      
            <div className="container">
            <Navbar/>
            <UserBar/>
            <h2> Here in Show Events</h2>
            
            {this.displayEvents( )}



            </div>
        );
        
    }
}