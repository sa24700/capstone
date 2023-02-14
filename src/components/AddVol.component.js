import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import axios from 'axios';

const GetSkill = props => (
    <option value={props.optionSkill}>props.optionSkill</option>
)

export default class AddVol extends  Component{

    constructor(props){
        super(props);

            this.onChangeDate = this.onChangeDate.bind(this)
            this.onChangeStartTime = this.onChangeStartTime.bind(this)
            this.onChangeEndTime = this.onChangeEndTime.bind(this)
            this.onChangeSkill = this.onChangeSkill.bind(this)

        this.state = {
            date: null,
            startTime: "",
            endTime: "",
            skill: "",
            getSkills: []
        }
    }
 
    onChangeDate(date){
        this.setState({
            date: date
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

    onChangeSkill(e){
        this.setState({
            skill:  e.target.selected
        });
    }
    displayOptionSkill( ){
        console.log("here is the state of events " + this.state.events)
        return this.state.getSkills.map(element => {
           
            return <GetSkill optionSkill={element} />;
        });
    }
    componentDidMount(){
        axios.get('http//localhost:8080/getSkills/:userId').then( res => {
            console.log("volunteer skills " + res.data);
             this.setState({getSkills: res.data})
       })
    }
   
    onSubmit(e){
        e.preventDefault();

    }


render(){
   return(
    <div className='container'>
    <h2>Thanks for Volunteering!</h2>
    
    <form class="row g-3 needs-validation" novalidate>
   
    <div className='col-md-4'>
        <label for="volDate" class="form-label">Date</label>
        <DatePicker id="volDate" 
            value={this.state.date} 
            placeholder ="Please pick a Date" 
            onChange={this.onChangeDate} 
            required/>
    </div>
    <div className='col-md-4'>
        <label for="startTime" class="form-label">startTime</label>
        <input type="text" class="form-control" id="startTime" value={this.state.startTime}  placeholder="55555" 
            onChange={this.onChangeStartTime} required/>
    </div>
    <div className='col-md-4'>
        <label for="endTime" class="form-label">End Time</label>
        <input type="text" class="form-control" id="endTime" value={this.state.endTime}  placeholder="IL" 
            onChange={this.onChangeEndTime} required/>
    </div>

    <div className="col-md-4">
        <label for="eventDescription" class="form-label">Relevant Skill</label>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"id="eventDescription" value={this.state.skill}   
            onChange={this.onChangeSkill} required>
                <option selected>""</option>
                {this.displayOptionSkill}
        </select>
         
    </div>



    <div class="col-12">
        <button class="btn btn-primary" type="submit" onClick={this.onSubmit()}>Volunteer</button>
    </div>
    </form>
    </div>
   );
    
}
}