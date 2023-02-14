import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import EventItems from './EventItems.component';
export default class CreateEvent extends  Component{

    constructor(props){
        super(props);
            this.onChangeEventName = this.onChangeEventName.bind(this)
            this.onChangeDescription = this.onChangeDescription.bind(this)
            this.onChangeStartDate = this.onChangeStartDate.bind(this)
            this.onChangeEndDate = this.onChangeEndDate.bind(this)
            this.onChangeStartTime = this.onChangeStartTime.bind(this)
            this.onChangeEndTime = this.onChangeEndTime.bind(this)
            this.onChangeLocation = this.onChangeLocation.bind(this)
            this.onChangeStreet = this.onChangeStreet.bind(this)
            this.onChangeCity = this.onChangeCity.bind(this)
            this.onChangeZip = this.onChangeZip.bind(this)
            this.onChangeMyState = this.onChangeMyState.bind(this)
            this.onChangeItems = this.onChangeItems.bind(this)


        this.state = {
            eventName: '',
            description: '',
            startDate: null,
            endDate: null,
            startTime: '',
            endTime: '',
            location: '',
            street: '',
            city: '',
            zip: '',
            myState: '',
            items: []
        }
    }

        onChangeEventName(e){
            this.setState({
                eventName: e.target.value
            });
        }

        onChangeDescription(e){
            this.setState({
                description:  e.target.value
            });
        }
        onChangeStartDate(date){
            this.setState({
                startDate: date
            });
        }

        onChangeEndDate(date){
            this.setState({
                endDate: date
            });
        }

        onChangeStartTime(e){
            this.setState({
                startTime:  e.target.value
            });
        }
        onChangeEndTime(e){
            this.setState({
                endTime:  e.target.value
            });
        }

        onChangeLocation(e){
            this.setState({
                location:  e.target.value
            });
        }

        onChangeStreet(e){
            this.setState({
                street:  e.target.value
            });
        }

        onChangeCity(e){
            this.setState({
                city:  e.target.value
            });
        }

        onChangeMyState(e){
            this.setState({
                myState:  e.target.value
            });
        }

        onChangeZip(e){
            this.setState({
                zip:  e.target.value
            });
        }

        onChangeItems(e){
            this.setState({
                items:  e.target.value
            });
        }
        DisplaySkillForms(){
            let {stateSkillsArray} = this.state;
            
            return(
                <div className="skillforms">
                { stateSkillsArray.map((element, keyID) => (
                  <div className="skillforms" key={keyID}>{element}</div>
                ))}
              </div>
            )
           
           
            
        }

        AddSkillForm(){
            let {stateSkillsArray} = this.state;

           console.log("stateskillsarray " + stateSkillsArray.length)
           this.setState({stateSkillsArray: [... stateSkillsArray, <EventItems/>]});
           
        }

        onSubmit = (e) =>{
            e.preventDefault();

            var newEvent = {
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                eventName: this.state.eventName,
                location: this.state.location,
                street: this.state.street,
                city: this.state.city,
                myState: this.state.myState,
                zip: this.state.zip,
                description: this.state.description,       
            }

            axios.post('http://localhost:8080/createEvent', newEvent).then(res => console.log(res.data));
            var userId = "test";
            window.location = "/userLanding:"+ userId;

        }

    render(){

        return (
            <div className='container'>
            <h2>Create a New Event</h2>
            
            <form class="row g-3 needs-validation" novalidate method="post" onSubmit={this.onSubmit}>
            <div class="col-md-4">
                <label for="eventName" class="form-label">Event Name</label>
                <input type="text" class="form-control" id="eventName" placeholder="afternoon barbecue" 
                    value={this.state.eventName} onChange= {this.onChangeEventName} required/>
            </div>
            <div className='col-md-4'>
                <label for="eventLocation" class="form-label">Event Location</label>
                <input type="text" class="form-control" id="eventLocation" placeholder ="city hall" 
                    value={this.state.location} onChange={this.onChangeLocation} required/>
            </div>
            <div className='col-md-4'>
                <label for="eventStreet" class="form-label">Street</label>
                <input type="text" class="form-control" id="eventStreet" placeholder="1234 Maple Street"
                    value={this.state.street} onChange={this.onChangeStreet} required/>
            </div>
            <div className='col-md-4'>
                <label for="eventCity" class="form-label">City</label>
                <input type="text" class="form-control" id="eventCity" placeholder="Joliet"
                    value={this.state.city} onChange={this.onChangeCity} required/>
            </div>
            <div className='col-md-4'>
                <label for="eventZip" class="form-label">Zip code</label>
                <input type="text" class="form-control" id="eventZip" placeholder="55555" 
                    value={this.state.zip} onChange={this.onChangeZip} required/>
            </div>
            <div className='col-md-4'>
                <label for="eventState" class="form-label">State</label>
                <input type="text" class="form-control" id="eventState" placeholder="IL" 
                    value={this.state.myState} onChange={this.onChangeMyState} required/>
            </div>


            <div className='col-md-4'>
                <label for="startDate" class="form-label">Start Date</label>
                <DatePicker  
                    placeholderText="Please pick a start Date"
                    selected={this.state.startDate} 
                    onChange={this.onChangeStartDate} 
                    required
                />
            </div>
            <div className='col-md-4'>
                <label for="endDate" class="form-label">End Date</label>
                <DatePicker  
                    
                    placeholderText="Please pick and end Date"
                    selected={this.state.endDate} 
                    onChange={this.onChangeEndDate} 
                    required
                />
            </div>
            <div className='col-md-4'>
                <label for="startTime" class="form-label">startTime</label>
                <input type="time" class="form-control" id="startTime" 
                    value={this.state.startTime} onChange={this.onChangeStartTime} required/>
            </div>
            <div className='col-md-4'>
                <label for="endTime" class="form-label">End Time</label>
                <input type="time" class="form-control" id="endTime" 
                value={this.state.endTime} onChange={this.onChangeEndTime} required/>
            </div>

            <div className="col-md-4">
                <label for="eventDescription" class="form-label">Event Description</label>
                <textarea class="form-control" id="eventDescription" rows="3" 
                    placeholder="This event is a barbecue taking place at city hall"
                    value={this.state.description} onChange={this.onChangeDescription} required></textarea> 
            </div>



            <div class="col-12">
                <button class="btn btn-primary" type="submit" onSubmit={this.onSubmit}>CreateEvent</button>
            </div>
            </form>
            </div>
        );
    }
}