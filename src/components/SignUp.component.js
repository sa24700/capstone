import React, {Component, useState} from 'react'
import axios from 'axios'
import AddSkillFormComponent from './AddSkillForm.component';

  

export default class SignUp extends  Component{
    constructor(props){
        super(props);

        this.onChangePick = this.onChangePick.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeOrganization = this.onChangeOrganization.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeSkills = this.onChangeSkills.bind(this)
        this.onChangeSkillName = this.onChangeSkillName.bind(this)
        this.onChangeProfessional = this.onChangeProfessional.bind(this)
        this.onChangeSkillLevel = this.onChangeSkillLevel.bind(this)
        this.AddSkillForm = this.AddSkillForm.bind(this)
        this.DisplaySkillForms = this.DisplaySkillForms.bind(this)
        this.onChangeSkillsInfoArray = this.onChangeSkillsInfoArray.bind(this)
    
        this.state = {
            pick : false,
            userName: "",
            password:  "",
            firstName:  "",
            lastName:  "",
            organization:  "",
            phoneNumber:  "",
            email:  "",
            skillsInfoArray: [],
            stateSkillsArray:  [ AddSkillFormComponent(this.selVal= this.state.skillsInfoArray)] ,
            
            skillName: "",
            skillLevel: "",
            professional: false
        }
    }

    onChangeSkillsInfoArray(e){
        this.setState({
            skillsInfoArray: e.target.value
        })
    }
    onChangeSkills(e){
        this.setState({
            stateSkillsArray:  e.target.value
        })
    }
        onChangeSkillLevel(e){
            this.setState({skillLevel: e.target.selected})
        }

        onChangeSkillName(e){
            this.setState({skillName: e.target.value})
        }

        onChangeProfessional(e){
            this.setState({professional: e.target.checked})
        }
        onChangePick(e){
            this.setState({
                pick: e.target.checked
            })
          
        }

        onChangeUserName(e){
            this.setState({
                userName:  e.target.value
            })
        }
        onChangePassword(e){
            this.setState({
                password: e.target.value
            })
        }

        onChangeFirstName(e){
            this.setState({
                firstName: e.target.value
            })
        }

        onChangeLastName(e){
            this.setState({
                lastName:  e.target.value
            })
        }
        onChangeEmail(e){
            this.setState({
                email:  e.target.value
            })
        }

        onChangePhoneNumber(e){
            this.setState({
                phoneNumber:  e.target.value
            })
        }

        onChangeOrganization(e){
            this.setState({
                organization:  e.target.value
            })
        }

   
  

         LeaderSignup(){
                return (

                    <div className='col-md-4'>
                    <label for="organization" class="form-label">Organization</label>
                    <input type="text" class="form-control" id="organization" placeholder="My example Org" 
                        value={this.state.organization} onChange={this.onChangeOrganization} required/>
                </div>
                );
        }

         VolunteerSignup(){
                return(

                <div className='col-md-4'>
                    <button class="btn btn-primary" type="submit" onClick={ this.AddSkillForm} >Add Skill</button>

                </div>
    
                ); 
        }
        
        removeForm( props){
            let {stateSkillsArray} = this.state;
            console.log("here is the props value " +  props );
           return this.setState({stateSkillsArray:  stateSkillsArray.filter(function(value,i) {
                console.log("here is the props " + props + " and here is the value " + i)
                if(i != props){
                    return value;
                }
                else{
                    console.log("I have skipped index " + i)
                }
            
            })
            
          });
        }
        DisplaySkillForms(){
            let {stateSkillsArray} = this.state;
            
            return(
                <div className="skillforms">
                { stateSkillsArray.map(( element,  index) => { 
                     
                    return <div>
                       <button class="btn btn-primary" type="submit" onClick={() => this.removeForm(index)} key={index}>{index}</button> 
                        {element}  
                        </div>
                     
                })}
              </div>
            )
           
           
            
        }

        AddSkillForm(){
            let {stateSkillsArray} = this.state;

           console.log("stateskillsarray " + stateSkillsArray.length)
           this.setState({stateSkillsArray: [... stateSkillsArray, <AddSkillFormComponent/>]});
           
        }

         onSubmit = (e) =>{
            e.preventDefault();
            
            const  newUser =   {
                
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                    email: this.state.email,
                    userName: this.state.userName,
                    password: this.state.password,
               
                    pick: this.state.pick,
                    skills: this.state.skills,
 
                    organization: this.state.organization,          
    
                 
            }


            axios.post('http://localhost:8080/addUser', newUser).then(res => console.log(res.data));
            window.location = "/";
        }
    render(){
           
            var display;
            if(this.state.pick == false) {
               display =  this.VolunteerSignup();
            }
            else {
               display = this.LeaderSignup();
            }
           
 
        return (
            <div className='container'>
            <h2>Register Today!</h2>

            <div class="form-check">
            <input class="form-check-input" type="checkbox"   id="volOrLeader" value={this.state.pick} onChange={this.onChangePick} required/>
            <label class="form-check-label" for="volOrLeader">
                Are you an Event Leader?
            </label>
            </div>

            <form class="row g-3 needs-validation" novalidate onSubmit={this.onSubmit}>
                <div class="col-md-4">
                    <label for="userName" class="form-label">UserName</label>
                    <input type="text" class="form-control" id="userName" placeholder="myUserName32"  value={this.state.userName} onChange= {this.onChangeUserName} required/>
                </div>
                <div className='col-md-4'>
                    <label for="password" class="form-label">Password</label>
                    <input type="text" class="form-control" id="password"   placeholder ="32()MYpass."
                        value={this.state.password} onChange={this.onChangePassword} required/>
                </div>
 

                <div className='col-md-4'>
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="John" 
                        value={this.state.firstName} onChange={this.onChangeFirstName} required/>
                </div>
                <div className='col-md-4'>
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Smith" 
                        value={this.state.lastName} onChange={this.onChangeLastName} required/>
                </div>
               
                <div className='col-md-4'>
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phoneNumber" placeholder="(111) 111-1111" 
                        value={this.phoneNumber} onChange={this.onChangePhoneNumber} required/>
                </div>
    
    
                <div className='col-md-4'>
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="example@yahoo.com" 
                        value={this.email} onChange={this.onChangeEmail} required/>
                </div>

            {display}

             
                {this.DisplaySkillForms()}
             

 
            <div class="col-12">
                <button class="btn btn-primary" type="submit" >Signup</button>
            </div>
            </form>
            </div>
        );
    }
}