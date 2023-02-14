import React, {Component} from 'react'
import Navbar from './Navbar.component';
import UserBar from './userBar.component';
import axios from 'axios';

const VolSheets = props => (
    
    <article>
    <h2>Hello</h2>
    <div > 
       <div  > <p >{props.newVolSheet["eventName"]}</p></div>
       <div ><p >{props.newVolSheet['startTime']}</p><p  >{props.newVolSheet['endTime']}</p></div> 
        
    </div>
    <div>{props.newVolSheet['location']}</div>
    <div><button id="deleteEvent" onClick={() => props.innerDelete(props.newVolSheet['_id'])} value="X"></button></div>
</article>
)
export default class VolLanding extends  Component{
    constructor(props){
        super(props);

        this.onChangeVolSheets = this.onChangeVolSheets.bind(this);

        this.state = {
            volSheets: []

        }
    }

    onChangeVolSheets(e){
        this.setState({ volSheets : e.target.value});
    }

    deleteEvent(id ){
        const innerDelete = (id) =>{

        var test = id;
        return console.log(test);
        }

    }

    displayVolSheets( ){
        console.log("here is the state of events " + this.state.volSheets)
        return this.state.volSheets.map(element => {
           
            return <VolSheets newVolSheet={element} innerDelete={this.innerDelete} eventID={element['_id']}/>;
        });
    }
    componentDidMount(){
        var userId = "test";
        
        axios.get('http://localhost:8080/showAllEvents/'+ userId).then( res => {
             console.log("hre " + res.data);
              this.setState({volSheets: res.data})
        })
    }

    render(){
        return(      
            <div className="container">
            <Navbar/>
            <UserBar/>
            <h2> Here in Show Events</h2>
            

     
            <main>
                {this.displayVolSheets( )}
            </main>
            


            </div>
        );
        
    }
}