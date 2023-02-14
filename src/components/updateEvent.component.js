import React, {Component} from 'react'
import DatePicker from 'react-datepicker';

export default class UpdateEvent extends  Component{
    constructor(props){
        super(props);

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

        onSubmit(e){
            e.preventDefault();

        }


    render(){
        <div className='container'>
        <h2>Create a New Event</h2>
        
        <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
            <label for="eventName" class="form-label">Event Name</label>
            <input type="text" class="form-control" id="eventName" value="afternoon barbecue" onChange= {this.onChangeEventName} required/>
        </div>
        <div className='col-md-4'>
            <label for="eventLocation" class="form-label">Event Location</label>
            <input type="text" class="form-control" id="eventLocation" value ="city hall" onChange={this.onChangeLocation} required/>
        </div>
        <div className='col-md-4'>
            <label for="eventStreet" class="form-label">Street</label>
            <input type="text" class="form-control" id="eventStreet" value="1234 Maple Street" onChange={this.onChangeStreet} required/>
        </div>
        <div className='col-md-4'>
            <label for="eventCity" class="form-label">City</label>
            <input type="text" class="form-control" id="eventCity" value="Joliet" onChange={this.onChangeCity} required/>
        </div>
        <div className='col-md-4'>
            <label for="eventZip" class="form-label">Zip code</label>
            <input type="text" class="form-control" id="eventZip" value="55555" onChange={this.onChangeZip} required/>
        </div>
        <div className='col-md-4'>
            <label for="eventState" class="form-label">State</label>
            <input type="text" class="form-control" id="eventState" value="IL" onChange={this.onChangeMyState} required/>
        </div>


        <div className='col-md-4'>
            <label for="startDate" class="form-label">Start Date</label>
            <DatePicker id="startDate" 
                value="1234 Maple Street" 
                onChange={this.onChangeStartDate} 
                required/>
        </div>
        <div className='col-md-4'>
            <label for="endDate" class="form-label">End Date</label>
            <DatePicker id="endDate" 
                value="Joliet" 
                onChange={this.onChangeEndDate} 
                required/>
        </div>
        <div className='col-md-4'>
            <label for="startTime" class="form-label">startTime</label>
            <input type="time" class="form-control" id="startTime" value="55555" onChange={this.onChangeStartTime} required/>
        </div>
        <div className='col-md-4'>
            <label for="endTime" class="form-label">End Time</label>
            <input type="time" class="form-control" id="endTime" value="IL" onChange={this.onChangeEndTime} required/>
        </div>

        <div className="col-md-4">
            <label for="eventDescription" class="form-label">Event Description</label>
            <textarea class="form-control" id="eventDescription" rows="3" onChange={this.onChangeDescription} required></textarea> 
        </div>



        <div class="col-12">
            <button class="btn btn-primary" type="submit" onSubmit={this.onSubmit}>Update</button>
        </div>
        </form>
        </div>
        
    }
}