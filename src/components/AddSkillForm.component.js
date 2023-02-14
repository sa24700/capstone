import React, {Component, useState} from 'react'
 
 
export default function SkillForm(props)  {
     
      return (   <div className="container" >
                    {console.log("here be props" + JSON.stringify(props))}
                    <label for="nameOfSkill" class="form-label">Skill Name</label>
                    <input type="text" class="form-control" id="nameOfSkill" value={props.nameVal} onChange={props.nameChange} placeholder="Cooking"/>
            
                    <label for="skillLevel" class="form-label">Skill Level</label>
                    <select class="form-select" aria-label="Default select example" value={props.selVal} onChange={props.selChange}>
                        <option selected></option>
                        <option value="1">novice</option>
                        <option value="2">intermediate</option>
                        <option value="3">master</option>
                    </select>


                </div> );

     
}